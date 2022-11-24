{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
in {
  prefect = final: prev: {
    # Add your overlays here
    prefect-sources = prev.callPackage ./packages/_sources/generated.nix {};
    machlib = import __inputs__.mach-nix {
      pkgs = prev;
      pypiData = __inputs__.pypi-deps-db;
    };
  };
  providers = import ./packages/providers.nix;
}
