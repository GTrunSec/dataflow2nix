{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
in {
  spiffworkflow = final: prev: {
    # Add your overlays here
    spiffworkflow-sources = prev.callPackage ./packages/_sources/generated.nix {};
  };
}
