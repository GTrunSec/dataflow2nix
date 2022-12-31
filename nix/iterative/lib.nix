{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;

  nixpkgs = inputs.nixpkgs.appendOverlays [
    cell.overlays.iteractive
    __inputs__.poetry2nix.overlay
  ];
in {
  inherit nixpkgs;
}
