{ inputs, cell }:
let
  inherit (cell.lib) nixpkgs;
in
{
  malloy-composer =
    nixpkgs.python3Packages.callPackage ./packages/malloy-composer.nix
      { source = nixpkgs.malloy-sources.malloy-composer; };
  malloy-composer-latest = cell.packages.malloy-composer.override {
    source = nixpkgs.malloy-sources.malloy-composer-latest;
  };
}
