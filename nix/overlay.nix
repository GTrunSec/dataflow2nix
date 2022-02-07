{ inputs }:
final: prev: let
  npmlock2nix = import inputs.npmlock2nix { pkgs = prev; };
in
  {
    airflow-requirements = final.machlib.mkPython rec {
      requirements = builtins.readFile ./requirements.txt;
      providers = {
        requires = "nixpkgs";
        snakebite = "nixpkgs";
      };
    };

    machlib = import inputs.mach-nix {
      pkgs = prev;
      pypiData = inputs.pypi-deps-db;
    };
    airflow-sources = prev.callPackage ./_sources/generated.nix { };
    # yarn upgrade && yarn2nix > yarn2nix.nix
    airflow-frontend = final.mkYarnPackage rec {
      name = "airflow-frontend-node";
      packageJSON =
        let
          patchedJSON = prev.runCommand "package.json" { buildInputs = [ ]; } ''
            cp ${final.airflow-sources.airflow-release.src}/airflow/www/package.json $out
            sed -i '1 a  "name": "airflow",  \n "version":"${
            final.airflow-sources.airflow-release.version
          }",' $out
          '';
        in
          patchedJSON;
      src = "${final.airflow-sources.airflow-release.src}/airflow/www";
      # yarnLock = "${final.airflow-sources.airflow-release.src}/airflow/www/yarn.lock";
      yarnLock = ./yarn.lock;
      #yarnNix = ./yarn.nix;
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
    airflow-release = prev.callPackage ./. { };
    airflow-latest =
      with final;
      (
        (
          final.airflow-release.override {
            #python3Packages = final.python38Packages;
          }
        )
        .overridePythonAttrs (
          old: rec {
            inherit (airflow-sources.airflow-latest) src pname version;
            airflow-latest-requirements = machlib.mkPython rec {
              requirements = builtins.readFile ./nix/latest-requirements.txt;
              providers = { };
            };
            propagatedBuildInputs =
              old.propagatedBuildInputs ++ [ airflow-latest-requirements ];
          }
        )
      );
    airflow-vm-tests = prev.callPackage ../tests/nixos-tests.nix { inherit inputs; };
  }
