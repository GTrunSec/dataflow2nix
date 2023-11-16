{ inputs, cell }:
let
  nixpkgs = inputs.nixpkgs.appendOverlays [
    (final: prev: {
      # Add your overlays here
      skypilot-sources = prev.callPackage ./packages/_sources/generated.nix { };
      skypilot = prev.python3Packages.callPackage ./packages/skypilot.nix { };
    })
  ];
in
{
  nixpkgs = inputs.nixpkgs.sourceInfo;
  inherit (nixpkgs) skypilot;
}
