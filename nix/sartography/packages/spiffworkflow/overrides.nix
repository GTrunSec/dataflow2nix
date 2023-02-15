final: prev: let
  addNativeBuildInputs = drvName: inputs: {
    "${drvName}" = prev.${drvName}.overridePythonAttrs (old: {
      propagatedBuildInputs = (old.propagatedBuildInputs or []) ++ inputs;
    });
  };
in
  {}
  // addNativeBuildInputs "celery" [final.setuptools]
