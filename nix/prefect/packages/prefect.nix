{
  lib,
  python3Packages,
  source,
  machlib,
  buildNpmPackage,
}: let
  frontend = buildNpmPackage {
    name = "prefect-frontend";
    src = source.src + "/orion-ui";
    npmBuild = "npm run build";
  };
  requirements = machlib.mkPython rec {
    requirements = builtins.readFile (source.src + "/requirements.txt");
    providers = {};
  };
in
  python3Packages.buildPythonPackage {
    inherit (source) src version pname;
    propagatedBuildInputs = with python3Packages; [requirements];
    passthru = {
      inherit requirements frontend;
    };
    doCheck = false;
    preConfigure = ''
      sed -i 's|__module_path__ / "orion" / "ui"|"${frontend}"|' src/prefect/__init__.py
    '';
    meta = with lib; {
      description = "https://github.com/PrefectHQ/prefect/blob/master/requirements.txt";
      homepage = "https://github.com/PrefectHQ/prefect";
      license = licenses.asl20;
    };
  }
