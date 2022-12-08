{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
  inherit (inputs.cells-lab.writers.lib) writeShellApplication;
in {
  nixpkgs = inputs.nixpkgs-prefect.legacyPackages.${inputs.nixpkgs.system}.appendOverlays [
    cell.overlays.prefect
    cell.overlays.providers
    inputs.cells.common.overlays.mach-nix
    __inputs__.npm-buildpackage.overlays.default
  ];
  mkPrefectJob = {extraPackages ? [], ...}: let
    pythonEnv =
      cell.lib.nixpkgs.python3.buildEnv.override
      {
        extraLibs =
          [
            cell.packages.prefect
            cell.lib.nixpkgs.prefect-jupyter
          ] ++ extraPackages
          ++ (cell.packages.prefect.passthru.requirements.python.pkgs.selectPkgs
            cell.packages.prefect.passthru.requirements.python.pkgs);
      };
  in
    writeShellApplication {
      name = "mkPrefecJob";
      runtimeInputs = [pythonEnv];
      text = ''
        python "$@"
      '';
    };
}
