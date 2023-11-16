{ inputs, cell }:
let
  nixpkgs = inputs.nixpkgs.appendOverlays [ cell.overlays.enso ];
in
{
  inherit nixpkgs;
}
