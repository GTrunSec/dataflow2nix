{
  python3Packages,
  lib,
  iteractive-sources,
  setuptools-scm,
}:
python3Packages.buildPythonPackage rec {
  format = "pyproject";
  inherit (iteractive-sources.dvc-http) pname version src;

  SETUPTOOLS_SCM_PRETEND_VERSION = version;

  nativeBuildInputs = [
    setuptools-scm
  ];

  propagatedBuildInputs = with python3Packages; [
    fsspec
  ];
  preConfigure = ''
    rm -rf setup.cfg
  '';
  meta = with lib; {
    description = "HTTP plugin for dvc";
    homepage = "https://github.com/iterative/dvc-http";
    license = "Apache-2.0";
  };
}
