{
  inputs,
  cell,
}: let
  inherit (inputs.cells._main.lib) __default__;

  nixpkgs = inputs.nixpkgs.appendOverlays [
    (final: prev: {
      # Add your overlays here
      prefect-sources = prev.callPackage ./packages/_sources/generated.nix {};
      machlib = import __default__.mach-nix {
        pkgs = nixpkgs;
        pypiData = __default__.pypi-deps-db;
      };
      npmlock2nix = (prev.callPackage __default__.npmlock2nix {}).build;
    })
  ];
in {
  prefect = nixpkgs.callPackage ./packages/prefect.nix {
    source = nixpkgs.prefect-sources.prefect;
  };
  prefect-latest = cell.packages.prefect.override {
    source = nixpkgs.prefect-sources.prefect-latest;
  };
}
