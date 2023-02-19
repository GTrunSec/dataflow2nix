final: prev: let
  addNativeBuildInputs = drvName: inputs: {
    "${drvName}" = prev.${drvName}.overridePythonAttrs (old: {
      nativeBuildInputs = (old.nativeBuildInputs or []) ++ inputs;
    });
  };
in
  {
    cryptography = prev.cryptography.overridePythonAttrs (old: {
      cargoDeps = with old;
        prev.pkgs.rustPlatform.fetchCargoTarball {
          inherit (old) src;
          sourceRoot = "${pname}-${version}/${cargoRoot}";
          name = "${pname}-${version}";
          hash = "sha256-0x+KIqJznDEyIUqVuYfIESKmHBWfzirPeX2R/cWlngc=";
        };
    });
    orjson = prev.orjson.overridePythonAttrs (old: {
      cargoDeps = with old;
        prev.pkgs.rustPlatform.fetchCargoTarball {
          inherit (old) src;
          sourceRoot = "${pname}-${version}";
          name = "${pname}-${version}";
          hash = "sha256-8T//q6nQoZhh8oJWDCeQf3gYRew58dXAaxkYELY4CJM=";
        };
    });

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
  ## aws
  // addNativeBuildInputs "mypy-boto3-secretsmanager" [final.setuptools]
