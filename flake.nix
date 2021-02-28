{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "nixpkgs/2247d824fe07f16325596acc7faa286502faffd1";
    ranz2nix = { url = "github:andir/ranz2nix"; flake = false; };
    flake-utils.url = "github:numtide/flake-utils";
    airflow = { url = "github:apache/airflow"; flake = false; };
    mach-nix = { url = "github:DavHau/mach-nix/3.1.1"; };
  };

  outputs = { self, nixpkgs, ranz2nix, airflow, flake-utils, mach-nix }:
    (flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs {
            inherit system;
            overlays = [
              self.overlay
            ];
          };
        in
        rec {
          devShell = import ./devShell.nix
            {
              inherit pkgs ranz2nix airflow; mach-nix = mach-nix.lib.${system};
            };
          packages = flake-utils.lib.flattenTree {
            apache-airflow = pkgs.apache-airflow;
          };
          defaultPackage = packages.apache-airflow;
        }
      ) // {
      overlay = final: prev:
        {
          apache-airflow = prev.callPackage ./build.nix {
            inherit airflow ranz2nix mach-nix;
            python3Packages = prev.python37Packages;
          };
        };
    }
    );
}
