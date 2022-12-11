final: prev: let
  addNativeBuildInputs = drvName: inputs: {
    "${drvName}" = prev.${drvName}.overridePythonAttrs (old: {
      nativeBuildInputs = (old.nativeBuildInputs or []) ++ inputs;
    });
  };
in
  {
    apprise = prev.apprise.overridePythonAttrs (attrs: {
      format = "setuptools";
      nativeBuildInputs =
        (attrs.nativeBuildInputs or [])
        ++ [
          final.babel
        ];
    });

    griffe = prev.griffe.overridePythonAttrs (attrs: {
      format = "pyproject";
      postPatch = ''
        substituteInPlace pyproject.toml \
          --replace 'dynamic = ["version"]' 'version = "${attrs.version}"' \
          --replace 'license = "ISC"' 'license = {file = "LICENSE"}' \
          --replace 'version = {source = "scm"}' 'license-expression = "ISC"'
      '';
    });
  }
  // addNativeBuildInputs "coolname" [final.setuptools]
  // addNativeBuildInputs "asgi-lifespan" [final.setuptools]
