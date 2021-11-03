{
  description = "Apache Airflow to Nix https://github.com/apache/airflow";

  inputs = {
    nixpkgs.url = "nixpkgs/release-21.05";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = { url = "github:edolstra/flake-compat"; flake = false; };
    nvfetcher = { url = "github:berberman/nvfetcher"; };
    devshell = { url = "github:numtide/devshell"; };
    mach-nix = { url = "github:DavHau/mach-nix"; inputs.pypi-deps-db.follows = "pypi-deps-db"; };
    pypi-deps-db = {
      url = "github:DavHau/pypi-deps-db";
      flake = false;
    };
    npmlock2nix-repo = {
      url = "github:tweag/npmlock2nix";
      flake = false;
    };
  };

  outputs =
    { self
    , nixpkgs
    , flake-utils
    , flake-compat
    , nvfetcher
    , devshell
    , mach-nix
    , npmlock2nix-repo
    , pypi-deps-db
    }:
    (flake-utils.lib.eachSystem [ "x86_64-linux" ]
      (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [
            self.overlay
            (final: prev: { nvfetcher-bin = nvfetcher.defaultPackage."${final.system}"; })
            devshell.overlay
          ];
        };
      in
      rec{
        devShell = with pkgs; pkgs.devshell.mkShell {
          packages = [
            #airflow-release
          ];
          commands = [
            {
              name = pkgs.nvfetcher-bin.pname;
              help = pkgs.nvfetcher-bin.meta.description;
              command = "export NIX_PATH=nixpkgs=${pkgs.path}; cd $PRJ_ROOT/nix; ${pkgs.nvfetcher-bin}/bin/nvfetcher -c ./sources.toml $@";
            }
          ];
        };
        apps = {
          airflow-release = flake-utils.lib.mkApp { drv = packages.airflow-release; exePath = "/bin/airflow"; };
        };
        packages = flake-utils.lib.flattenTree {
          airflow-release = pkgs.airflow-release;
          airflow-frontend = pkgs.airflow-frontend;
          airflow-latest = pkgs.airflow-latest;
        };
        defaultPackage = packages.airflow-release;

      }) // {
      overlay = final: prev:
        let
          npmlock2nix = import npmlock2nix-repo { pkgs = prev; };
        in
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
            pypiData = pypi-deps-db;
          };
          airflow-sources = prev.callPackage ./nix/_sources/generated.nix { };
          # yarn upgrade && yarn2nix > yarn2nix.nix
          airflow-frontend = final.mkYarnPackage rec{
            name = "airflow-frontend-node";
            packageJSON =
              let
                patchedJSON = prev.runCommand "package.json"
                  {
                    buildInputs = [ ];
                  } ''
                  cp ${final.airflow-sources.airflow-release.src}/airflow/www/package.json $out
                  sed -i '1 a  "name": "airflow",  \n "version":"${final.airflow-sources.airflow-release.version}",' $out
                '';
              in
              patchedJSON;
            src = "${final.airflow-sources.airflow-release.src}/airflow/www";
            # yarnLock = "${final.airflow-sources.airflow-release.src}/airflow/www/yarn.lock";
            yarnLock = ./nix/yarn.lock;
            #yarnNix = ./nix/yarn.nix;
            distPhase = "true";

            configurePhase = ''
              cp -r $node_modules node_modules
            '';

            buildPhase = ''
              yarn --offline build
              find package.json yarn.lock static/css static/js -type f | sort | xargs md5sum > static/dist/sum.md5
            '';

            installPhase = ''
              mkdir -p $out/static/
              cp -r static/dist $out/static
            '';
          };

          airflow-release = prev.callPackage ./nix { };

          airflow-latest = with final; ((final.airflow-release.override
            {
              #python3Packages = final.python38Packages;
            }).overridePythonAttrs
            (old: rec {
              inherit (airflow-sources.airflow-latest) src pname version;
              airflow-latest-requirements = machlib.mkPython rec {
                requirements = builtins.readFile ./nix/latest-requirements.txt;
                providers = { };
              };
              propagatedBuildInputs = old.propagatedBuildInputs ++ [
                airflow-latest-requirements
              ];
            }));
        };
    }) // {
      nixosModules = {
        airflow = import ./nix/module.nix;
      };
    };
}
