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
      commands = [
        {
          name = "nvfetcher-airflow";
          command = ''
            nix develop github:GTrunSec/cells-lab#update \
            --refresh --command \
            nvfetcher-update nix/airflow/packages/sources.toml
          '';
        }
        {
          name = "nvfetcher-prefect";
          command = ''
            nix develop github:GTrunSec/cells-lab#update \
            --refresh --command \
            nvfetcher-update nix/prefect/packages/sources.toml
          '';
        }
      ];
    };
  }
