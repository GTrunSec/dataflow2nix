{ inputs, cell }:
let
  inherit (inputs.cells.repo.lib) __inputs__;
  inherit (inputs.std-ext.writers.lib) writeShellApplication;
in
{
  nixpkgs = inputs.nixpkgs.appendOverlays [
    cell.overlays.spiffworkflow
    __inputs__.poetry2nix.overlays.default
  ];
}
