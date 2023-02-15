{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
  inherit (inputs.cells-lab.writers.lib) writeShellApplication;
in {
  nixpkgs = inputs.nixpkgs.appendOverlays [
    cell.overlays.spiffworkflow
    __inputs__.poetry2nix.overlay
  ];
}
