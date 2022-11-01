{
  inputs,
  cell,
}: let
  inherit (inputs.cells._automation.lib) __inputs__;
in {
  nixpkgs = inputs.nixpkgs.appendOverlays [
    (final: prev: {
      # Add your overlays here
      prefect-sources = prev.callPackage ./packages/_sources/generated.nix {};
      machlib = import __inputs__.mach-nix {
        pkgs = prev;
        pypiData = __inputs__.pypi-deps-db;
      };
    })
    (import ./packages/providers.nix)
    __inputs__.npm-buildpackage.overlays.default
  ];
}
