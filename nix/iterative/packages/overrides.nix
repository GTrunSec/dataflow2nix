pkgs: final: prev:
let
  addNativeBuildInputs = drvName: inputs: {
    "${drvName}" = prev.${drvName}.overridePythonAttrs (
      old: { nativeBuildInputs = (old.nativeBuildInputs or [ ]) ++ inputs; }
    );
  };
in
{ }
// addNativeBuildInputs "click-didyoumean" [ final.poetry ]
// addNativeBuildInputs "hydra-core" [
  final.setuptools
  pkgs.jre_headless
]
// addNativeBuildInputs "flufl-lock" [ final.pdm-pep517 ]
// addNativeBuildInputs "filelock" [ prev.hatchling ]
// addNativeBuildInputs "iterative-telemetry" [ final.setuptools ]
// addNativeBuildInputs "dvc-studio-client" [ final.setuptools ]
