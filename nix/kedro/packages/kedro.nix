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
    name = "kedro-viz";
    src = source.src;
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

    '';
    makeWrapperArgs = [
      "--prefix PYTHONPATH : $PYTHONPATH"
    ];
    meta = with lib; {
      description = "https://github.com/kedro-org/kedro/blob/main/dependency/requirements.txt";
      homepage = "https://github.com/kedro-org/kedro";
      license = licenses.asl20;
    };
  })
  .overridePythonAttrs (old: {
    passthru =
      old.passthru
      // {
        inherit frontend;
      };
  })
