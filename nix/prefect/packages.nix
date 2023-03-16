{
  inputs,
  cell,
}: let
  inherit (cell.lib) nixpkgs;
in {
  inherit (nixpkgs) prefect prefect-latest prefect-dev;
}
