{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
  inherit (inputs) nixpkgs;
in {
  kedro = final: prev: {
    # Add your overlays here
    kedro-sources = prev.callPackage ./packages/_sources/generated.nix {};
    kedro = prev.python3Packages.callPackage ./packages/kedro.nix {
      source = final.kedro-sources.kedro;
    };
    kedro-latest = cell.packages.kedro.override {
      source = final.kedro-sources.kedro-latest;
    };
    kedro-poetry = prev.callPackage ({
      extraPackages ? (_: []),
      poetry2nix,
    }:
      poetry2nix.mkPoetryEnv {
        projectDir = ./packages;
        overrides = poetry2nix.overrides.withDefaults (import ./packages/overrides.nix);
      }) {};
  };
}
