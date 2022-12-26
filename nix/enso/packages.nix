{
  inputs,
  cell,
}: let
  inherit (cell.lib) nixpkgs;
in {
  inherit (nixpkgs) enso enso-appimage;
}
