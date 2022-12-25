final: prev: let
  addNativeBuildInputs = drvName: inputs: {
    "${drvName}" = prev.${drvName}.overridePythonAttrs (old: {
      nativeBuildInputs = (old.nativeBuildInputs or []) ++ inputs;
    });
  };
in
  {
    pdm-pep517 = prev.pdm-pep517.overridePythonAttrs (old: {
      src = final.fetchPypi {
        pname = "pdm-pep517";
        version = "1.0.5";
        sha256 = "sha256-dOzpaUxP9fkD+6AA7EPwdRQ4csQSSNrM7PdGT5jOaAw=";
      };
    });
  }
  // addNativeBuildInputs "dynaconf" [final.setuptools]
  // addNativeBuildInputs "rope" [final.pytoolconfig]
  // addNativeBuildInputs "pytoolconfig" [final.pdm-pep517]

