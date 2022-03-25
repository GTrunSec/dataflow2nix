{
  description = "Apache Airflow to Nix https://github.com/apache/airflow";
  nixConfig = {
    flake-registry = "https://github.com/hardenedlinux/flake-registry/raw/main/flake-registry.json";
  };
  inputs = {
    flake-compat.flake = false;

    mach-nix.inputs.pypi-deps-db.follows = "pypi-deps-db";

    pypi-deps-db.url = "github:DavHau/pypi-deps-db";
    pypi-deps-db.flake = false;

    npmlock2nix.url = "github:tweag/npmlock2nix";
    npmlock2nix.configflake = false;

  };
  outputs =
    { self
    , nixpkgs
    , flake-utils
    , flake-compat
    , devshell
    , mach-nix
    , npmlock2nix
    , pypi-deps-db
    }
    @ inputs:
    (
      flake-utils.lib.eachSystem [ "x86_64-linux" ] (
        system: let
          overlay = import ./nix/overlay.nix { inherit inputs; };
          pkgs = inputs.nixpkgs.legacyPackages."${system}".appendOverlays [ overlay ];
          devshell = inputs.devshell.legacyPackages."${system}";
        in
          rec {
            inherit overlay;
            devShell = import ./shell { inherit devshell inputs pkgs; };
            apps = {
              airflow-release = flake-utils.lib.mkApp {
                drv = packages.airflow-release;
                exePath = "/bin/airflow";
              };
            };
            packages =
              flake-utils.lib.flattenTree {
                inherit (pkgs) airflow-release airflow-frontend airflow-latest;
              }
              // pkgs.lib.optionalAttrs pkgs.stdenv.isLinux { inherit (pkgs.airflow-vm-tests) airflow-vm-systemd; };
            defaultPackage = packages.airflow-release;
            defaultApp = apps.airflow-release;
          }
      )
      // {
        nixosModules = {
          airflow = {
            imports = [
              {
                nixpkgs.config.packageOverrides = pkgs: {
                  inherit
                    (self.packages."${pkgs.stdenv.hostPlatform.system}")
                    airflow-release
                    ;
                };
              }
              ./nix/module.nix
            ];
          };
        };
      }
    );
}
