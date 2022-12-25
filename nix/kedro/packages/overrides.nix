final: prev: let
  addNativeBuildInputs = drvName: inputs: {
    "${drvName}" = prev.${drvName}.overridePythonAttrs (old: {
      nativeBuildInputs = (old.nativeBuildInputs or []) ++ inputs;
    });
  };
in
  {
    pip-tools = prev.pip-tools.overridePythonAttrs (old: {
      pname = "pip-tools";
      version = "6.12.1";
      format = "pyproject";
      src = prev.fetchPypi {
        pname = "pip-tools";
        version = "6.12.1";
        sha256 = "sha256-iO+3spqSP/6sBxPm8j74UpzGF1Un1CuT9zdWzJQ4cpM=";
      };
      nativeBuildInputs = [ final.setuptools final.build final.click ];
    });
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
  // addNativeBuildInputs "pytoolconfig" [final.pdm-pep517 final.packaging]
