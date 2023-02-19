{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
in {
  prefect = final: prev: {
    # Add your overlays here
    prefect-sources = prev.callPackage ./packages/_sources/generated.nix {};
    prefect = prev.python3Packages.callPackage ./packages/prefect.nix {
      source = final.prefect-sources.prefect;
    };
    prefect-latest = cell.packages.prefect.override {
      source = final.prefect-sources.prefect-latest;
    };
    prefect-poetry = prev.callPackage ({poetry2nix}:
      poetry2nix.mkPoetryEnv {
        projectDir = ./packages;
        overrides = poetry2nix.overrides.withDefaults (import ./packages/overrides.nix);
      }) {};
  };
}
