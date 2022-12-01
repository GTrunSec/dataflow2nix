{
  inputs,
  cell,
}: let
  inherit (inputs.cells.common.lib) __inputs__;
in {
  mach-nix = final: prev: {
    machlib = import __inputs__.mach-nix {
      pkgs = prev;
      pypiData = __inputs__.pypi-deps-db;
    };
  };
}
