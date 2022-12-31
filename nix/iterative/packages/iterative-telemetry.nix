{
  python3Packages,
  lib,
  iteractive-sources,
  setuptools,
}:
python3Packages.buildPythonPackage {
  format = "pyproject";
  inherit (iteractive-sources.iterative-telemetry) pname version src;
  nativeBuildInputs = [
    setuptools
  ];
  propagatedBuildInputs = with python3Packages; [
    distro
    appdirs
    requests
    filelock
  ];
  meta = with lib; {
    description = "Iterative Telemetry";
    homepage = "https://github.com/iterative/telemetry-python";
    license = "Apache-2.0";
  };
}
