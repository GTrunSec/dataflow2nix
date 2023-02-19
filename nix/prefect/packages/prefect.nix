{
  lib,
  poetry2nix,
  source,
  buildNpmPackage,
  python3,
  extraPackages ? (_: []),
  groups ? [],
}: let
  frontend = buildNpmPackage {
    name = "prefect-frontend";
    src = source.src + "/ui";
    installPhase = "cp -r dist $out";
    npmBuild = ''
      npm run build
    '';
  };
in
  # python3Packages.buildPythonPackage {
  (poetry2nix.mkPoetryApplication {
    projectDir = ./.;
    inherit (source) src version pname;

    overrides = poetry2nix.overrides.withDefaults (import ./overrides.nix);

    inherit groups;

    passthru = {
      inherit frontend;
    };

    doCheck = false;

    preConfigure = ''
      sed -i 's|__module_path__ / "server" / "ui"|"${frontend}"|' src/prefect/__init__.py
    '';
    makeWrapperArgs = [
      "--prefix PYTHONPATH : $PYTHONPATH"
    ];
    meta = with lib; {
      description = "https://github.com/PrefectHQ/prefect/blob/master/requirements.txt";
      homepage = "https://github.com/PrefectHQ/prefect";
      license = licenses.asl20;
    };
  })
  .overridePythonAttrs (old: {
    passthru =
      old.passthru
      // {
        inherit frontend;
        pyproject = lib.importTOML ./pyproject.toml;
      };
  })
