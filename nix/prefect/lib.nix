{
  inputs,
  cell,
}: let
  inherit (inputs.cells._main.lib) __default__;
in {
  nixpkgs = inputs.nixpkgs.appendOverlays [
    (final: prev: {
      # Add your overlays here
      prefect-sources = prev.callPackage ./packages/_sources/generated.nix {};
      machlib = import __default__.mach-nix {
        pkgs = prev;
        pypiData = __default__.pypi-deps-db;
      };
      npmlock2nix = (prev.callPackage __default__.npmlock2nix {}).build;
    })
    (import ./packages/providers.nix)
  ];
}
