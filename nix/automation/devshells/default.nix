{
  inputs,
  cell,
}: let
  l = nixpkgs.lib // builtins;
  inherit (inputs) nixpkgs std;
in
  l.mapAttrs (_: std.lib.dev.mkShell) {
    default = {...}: {
      name = "dataflow2nix";

      imports = [
        inputs.std.std.devshellProfiles.default
        inputs.cells.tullia.devshellProfiles.default
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
          help = "update airflow toolchain with nvfetcher";
        }
        {
          name = "nvfetcher-prefect";
          command = ''
            nix develop github:GTrunSec/cells-lab#update \
            --refresh --command \
            nvfetcher-update nix/prefect/packages/sources.toml
          '';
          help = "update prefect toolchain with nvfetcher";
        }

        {
          name = "nvfetcher-malloy";
          command = ''
            nix develop github:GTrunSec/cells-lab#update \
            --refresh --command \
            nvfetcher-update nix/malloy/packages/sources.toml
          '';
          help = "update malloy toolchain with nvfetcher";
        }
        {
          name = "nvfetcher-skypilot";
          command = ''
            nix develop github:GTrunSec/cells-lab#update \
            --refresh --command \
            nvfetcher-update nix/skypilot/packages/sources.toml
          '';
          help = "update skypilot toolchain with nvfetcher";
        }

        {
          package = nixpkgs.nsjail;
        }
        {
          package = inputs.arion.packages.${nixpkgs.system}.arion;
        }
      ];
    };
    tullia = {
      imports = [inputs.cells.tullia.devshellProfiles.default];
    };
  }
