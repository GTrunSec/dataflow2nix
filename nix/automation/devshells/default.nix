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
      commands =
        [
          {
            package = nixpkgs.nsjail;
          }
          {
            package = inputs.arion.packages.${nixpkgs.system}.arion;
          }
        ]
        ++ (map (x: {
            name = "nvfetcher-${x}";
            command = ''
              nix develop github:GTrunSec/cells-lab#update \
              --refresh --command \
              nvfetcher-update nix/${x}/packages/sources.toml
            '';
            help = "update ${x} toolchain with nvfetcher";
          }) [
            "airflow"
            "prefect"
            "malloy"
            "skypilot"
            "kedro"
            "enso"
          ]);
    };
    tullia = {
      imports = [inputs.cells.tullia.devshellProfiles.default];
    };
  }
