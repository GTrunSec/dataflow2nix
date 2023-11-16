{ inputs, cell }:
{
  enso = final: prev: {
    enso-sources = prev.callPackage ./packages/_sources/generated.nix { };
    enso-appimage = prev.callPackage ./packages/enso-appimage.nix { };
  };
}
