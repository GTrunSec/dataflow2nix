{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
  inherit (inputs.cells-lab.writers.lib) writeShellApplication;
in {
  nixpkgs = inputs.nixpkgs-prefect.legacyPackages.${inputs.nixpkgs.system}.appendOverlays [
    cell.overlays.spiffworkflow
  ];
}
