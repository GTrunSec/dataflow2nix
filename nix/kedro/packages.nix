{
  inputs,
  cell,
}: let
  inherit (cell.lib) nixpkgs;
in {
  inherit (nixpkgs) kedro kedro-latest kedro-poetry kedro-viz;
}
