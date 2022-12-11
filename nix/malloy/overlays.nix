{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
in {
  malloy = final: prev: {
    # Add your overlays here
    malloy-sources = prev.callPackage ./packages/_sources/generated.nix {};
  };
}
