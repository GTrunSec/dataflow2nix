{ inputs, cell }:
let
  inherit (inputs.cells.repo.lib) __inputs__;

  nixpkgs = inputs.nixpkgs.appendOverlays [
    cell.overlays.iteractive
    __inputs__.poetry2nix.overlays.default
  ];
in
{
  inherit nixpkgs;
}
