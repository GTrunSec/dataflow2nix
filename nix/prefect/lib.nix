{ inputs, cell }:
let
  l = inputs.nixpkgs.lib // builtins;
  inherit (inputs.cells.repo.lib) __inputs__;
  inherit (inputs.std-ext.writers.lib) writeShellApplication;
in
{
  nixpkgs = inputs.nixpkgs.appendOverlays [
    cell.overlays.prefect
    __inputs__.poetry2nix.overlays.default
    __inputs__.npm-buildpackage.overlays.default
  ];

  mkPrefectJob =
    {
      extraLibs ? [ ],
      text ? "",
      runtimeInputs ? [ ],
      runtimeEnv ? { },
      providers ? {
        jupyter = false;
        aws = false;
      },
    }:
    let
      pythonEnv = cell.lib.nixpkgs.python3.buildEnv.override {
        extraLibs =
          extraLibs
          ++ [ cell.lib.nixpkgs.prefect ]
          ++ (l.optionals providers.jupyter) [
            cell.lib.nixpkgs.prefect-jupyter
            cell.lib.nixpkgs.prefect-aws
          ]
          ++ (l.optionals providers.aws) [ cell.lib.nixpkgs.prefect-aws ];
        ignoreCollisions = true;
      };
    in
    writeShellApplication {
      name = "mkPrefecJob";
      runtimeInputs = [ pythonEnv ] ++ runtimeInputs;
      inherit runtimeEnv;
      inherit text;
    };
}
