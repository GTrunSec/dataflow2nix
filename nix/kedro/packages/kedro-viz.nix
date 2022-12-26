{
  buildNpmPackage,
  kedro-sources,
  python3Packages,
  python3,
  kedro,
  pkg-config,
  pixman,
  cairo,
  pango,
  openssl,
}: let
  frontend = buildNpmPackage {
    name = "kedro-viz";
    src = kedro-sources.kedro-viz.src;
    installPhase = "cp -r build $out/";
    extraNodeModulesArgs.buildInputs = [python3 pkg-config pixman cairo pango openssl];
    extraEnvVars = {
      NODE_OPTIONS = "--openssl-legacy-provider";
    };
    npmBuild = ''
      npm run build --offline
    '';
  };
in
  python3Packages.buildPythonPackage {
    inherit (kedro-sources.kedro-viz) pname version;
    src = kedro-sources.kedro-viz.src;
    preConfigure = ''
      cd package
    '';
    propagatedBuildInputs = [
      (kedro.override {
        groups = ["kedro-viz"];
      })
    ];
    doCheck = false;
    passthru = {
      inherit frontend;
    };
  }
