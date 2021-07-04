{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "nixpkgs/release-21.05";
    master.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = { url = "github:edolstra/flake-compat"; flake = false; };
    nvfetcher = { url = "github:berberman/nvfetcher"; };
    devshell-flake = { url = "github:numtide/devshell"; };
    ranz2nix = { url = "github:andir/ranz2nix"; flake = false; };
    mach-nix = { url = "github:DavHau/mach-nix"; inputs.pypi-deps-db.follows = "pypi-deps-db"; };
    pypi-deps-db = {
      url = "github:DavHau/pypi-deps-db";
      flake = false;
    };
  };

  outputs =
    { self
    , nixpkgs
    , master
    , flake-utils
    , flake-compat
    , nvfetcher
    , devshell-flake
    , mach-nix
    , pypi-deps-db
    , ranz2nix
    }:
    (flake-utils.lib.eachSystem [ "x86_64-linux" ]
      (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [
            self.overlay
            (final: prev: { nvfetcher-bin = nvfetcher.defaultPackage."${final.system}"; })
            devshell-flake.overlay
          ];
        };
      in
      rec {
        devShell = with pkgs; devshell.mkShell {
          packages = [
            nixpkgs-fmt
          ];
          commands = [
            {
              name = pkgs.nvfetcher-bin.pname;
              help = pkgs.nvfetcher-bin.meta.description;
              command = "cd $DEVSHELL_ROOT/nix; ${pkgs.nvfetcher-bin}/bin/nvfetcher -c ./sources.toml --no-output $@; nixpkgs-fmt _sources";
            }
          ];
        };
        packages = flake-utils.lib.flattenTree {
          apache-airflow = pkgs.apache-airflow;
          #airflow-frontend = pkgs.airflow-frontend;
        };
        defaultPackage = packages.apache-airflow;
      }
      ) // {
      overlay = final: prev:
        {
          python3 = prev.python3.override
            (old: {
              packageOverrides =
                prev.lib.composeExtensions
                  (old.packageOverrides or (_: _: { }))
                  (selfPythonPackages: pythonPackages: {
                    # flask-appbuilder = pythonPackages.flask-appbuilder.overridePythonAttrs (oldAttrs: {
                    #   postPatch = oldAttrs.postPatch + ''
                    #     substituteInPlace setup.py \
                    #     --replace "Flask-JWT-Extended>=4.1.0" "Flask-JWT-Extended" \
                    #     --replace "PyJWT>=2.0.1" "PyJWT"
                    #   '';
                    # });
                    # pyjwt = pythonPackages.pyjwt.overridePythonAttrs (oldAttrs: {
                    #   inherit (final.airflow-sources.pyjwt) src pname version;
                    #   doCheck = false;
                    # });
                  });
            });

          machlib = import mach-nix {
            pkgs = prev;
            pypiDataRev = pypi-deps-db.rev;
            pypiDataSha256 = pypi-deps-db.narHash;
          };

          airflow-sources = prev.callPackage ./nix/_sources/generated.nix { };

          # airflow-frontend = final.mkYarnPackage rec{
          #   name = "airflow-frontend";
          #   packageJSON = ./nix/package.json;
          #   src = final.airflow-sources.airflow-release.src + "/airflow/www";
          #   yarnLock = ./nix/yarn.lock;
          #   yarnNix = ./nix/yarn.nix;
          # };
          apache-airflow = prev.callPackage ./nix { };
        };
    });
}
