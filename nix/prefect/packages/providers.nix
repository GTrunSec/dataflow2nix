final: prev:
builtins.mapAttrs (n: v:
    prev.python3Packages.callPackage (
      {
        machlib,
        python3Packages,
        prefect-sources,
      }: let
        requirements = machlib.mkPython rec {
          requirements = builtins.readFile (v.source.src + "/requirements.txt");
        };
      in
        python3Packages.buildPythonPackage {
          inherit (v.source) src pname version;
          doCheck = false;
          propagatedBuildInputs = v.buildInputs ++ [requirements];
        }
    ) {})
{
  prefect-jupyter = {
    source = final.prefect-sources.prefect-jupyter;
    buildInputs = with final.python3Packages; [];
  };
  prefect-aws = {
    source = final.prefect-sources.prefect-aws;
    buildInputs = with final.python3Packages; [];
  };
}
