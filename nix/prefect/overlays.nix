{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
in {
  prefect = final: prev: {
    # Add your overlays here
    prefect-sources = prev.callPackage ./packages/_sources/generated.nix {};
  };
  providers = import ./packages/providers.nix;
}
