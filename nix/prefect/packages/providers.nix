final: prev:
builtins.mapAttrs (n: v:
    prev.python3Packages.callPackage (
      {
        python3Packages,
        prefect-sources,
      }: (python3Packages.buildPythonPackage {
        inherit (v.source) src pname version;
        doCheck = false;
        propagatedBuildInputs =
          v.propagatedBuildInputs
          ++ [];
      })
    ) {})
{
  prefect-jupyter = {
    source = final.prefect-sources.prefect-jupyter;
    propagatedBuildInputs = [
      (final.prefect.override {
        groups = ["jupyter"];
      })
    ];
  };
  prefect-aws = {
    source = final.prefect-sources.prefect-aws;
    propagatedBuildInputs = with final.python3Packages; [
      (final.prefect.override {
        groups = ["aws"];
      })
    ];
  };
}
