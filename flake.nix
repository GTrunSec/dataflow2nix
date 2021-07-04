{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "nixpkgs/f6e4e2ff4139e86f87c080e589413d61631e0a65";
    master.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = { url = "github:edolstra/flake-compat"; flake = false; };
    nvfetcher = { url = "github:berberman/nvfetcher"; };
    devshell-flake = { url = "github:numtide/devshell"; };
  };

  outputs =
    { self
    , nixpkgs
    , master
    , flake-utils
    , flake-compat
    , nvfetcher
    , devshell-flake
    }:
    (flake-utils.lib.eachDefaultSystem
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
          airflow-frontend = pkgs.airflow-frontend;
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
                    flask-appbuilder = pythonPackages.flask-appbuilder.overridePythonAttrs (oldAttrs: {
                      postPatch = oldAttrs.postPatch + ''
                        substituteInPlace setup.py \
                        --replace "Flask-JWT-Extended>=4.1.0" "Flask-JWT-Extended" \
                        --replace "PyJWT>=2.0.1" "PyJWT"
                      '';
                    });
                    pyjwt = pythonPackages.pyjwt.overridePythonAttrs (oldAttrs: {
                      inherit (final.airflow-sources.pyjwt) src pname version;
                      doCheck = false;
                    });
                    flask-jwt-extended = pythonPackages.flask-jwt-extended.overridePythonAttrs (oldAttrs: {
                      inherit (final.airflow-sources.flask-jwt-extended) src pname version;
                      doCheck = false;
                    });
                  });
            });

          airflow-sources = prev.callPackage ./nix/_sources/generated.nix { };
          airflow-frontend = prev.mkYarnPackage rec{
            name = "airflow-frontend";
            #packageJSON = final.airflow-sources.airflow-release.src + "/airflow/www/package.json";
            packageJSON = ./nix/package.json;
            src = final.airflow-sources.airflow-release.src + "/airflow/www";
            yarnLock = final.airflow-sources.airflow-release.src + "/airflow/www/yarn.lock";
          };
          apache-airflow = prev.callPackage ./nix { };
        };
    });
}
