{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
in {
  nixpkgs = inputs.nixpkgs-prefect.legacyPackages.${inputs.nixpkgs.system}.appendOverlays [
    cell.overlays.prefect
    cell.overlays.providers
    __inputs__.npm-buildpackage.overlays.default
  ];
}
