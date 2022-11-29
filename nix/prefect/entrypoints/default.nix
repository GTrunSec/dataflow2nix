{
  inputs,
  cell,
}: let
  inherit (inputs.cells-lab.writers.lib) writeShellApplication;
  inherit (cell.lib) nixpkgs;
in {
  simple = let
    pythonEnv =
      cell.lib.nixpkgs.python3.buildEnv.override
      {
        extraLibs =
          [
            cell.packages.prefect
            nixpkgs.prefect-jupyter
          ]
          ++ (cell.packages.prefect.passthru.requirements.python.pkgs.selectPkgs
            cell.packages.prefect.passthru.requirements.python.pkgs);
      };
  in
    writeShellApplication {
      name = "simple";
      runtimeInputs = [pythonEnv];
      text = ''
        python "$@"
      '';
    };
}
