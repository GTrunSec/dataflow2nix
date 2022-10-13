{
  inputs,
  cell,
}: let
  inherit (cell.lib) nixpkgs;
in {
  prefect = nixpkgs.python3Packages.callPackage ./packages/prefect.nix {
    source = nixpkgs.prefect-sources.prefect;
  };
  prefect-latest = cell.packages.prefect.override {
    source = nixpkgs.prefect-sources.prefect-latest;
  };
}
