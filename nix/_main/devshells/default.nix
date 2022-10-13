{
  inputs,
  cell,
}: let
  l = nixpkgs.lib // builtins;
  inherit (inputs) nixpkgs std;
in
  l.mapAttrs (_: std.lib.dev.mkShell) {
    default = {...}: {
      std.adr.enable = false;

      name = "dataflow2nix";

      imports = [
        inputs.cells-lab.main.devshellProfiles.default
      ];

      nixago = [
        cell.nixago.mdbook
        cell.nixago.treefmt
      ];
    };
  }
