{ inputs, cell }:
let
  inherit (inputs.cells.repo.lib) __inputs__;
in
{
  spiffworkflow = final: prev: {
    # Add your overlays here
    starography-sources = prev.callPackage ./packages/_sources/generated.nix { };

    spiffworkflow = prev.callPackage ./packages/spiffworkflow {
      source = final.starography-sources.spiffworkflow;
    };
  };
}
