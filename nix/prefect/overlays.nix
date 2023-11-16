{ inputs, cell }:
let
  inherit (inputs.cells.repo.lib) __inputs__;
in
{
  prefect = final: prev: {
    # Add your overlays here
    prefect-sources = prev.callPackage ./packages/_sources/generated.nix { };
    prefect = prev.python3Packages.callPackage ./packages/prefect.nix {
      source = final.prefect-sources.prefect;
    };
    prefect-latest = cell.packages.prefect.override {
      source = final.prefect-sources.prefect-latest;
    };
    prefect-dev =
      prev.callPackage
        (
          { poetry2nix }:
          poetry2nix.mkPoetryEnv {
            preferWheels = true;
            groups = [ ];
            projectDir = ./packages/dev;
            overrides = import ./packages/overrides.nix poetry2nix;
          }
        )
        { };
  };
}
