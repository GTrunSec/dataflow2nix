{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    cells-lab.url = "github:GTrunSec/cells-lab";
    std.follows = "cells-lab/std";
  };

  inputs = {
    # tullia.url = "github:input-output-hk/tullia";
    tullia.url = "github:input-output-hk/tullia?ref=refs/pull/9/head";
    tullia.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = {std, ...} @ inputs:
    std.growOn {
      inherit inputs;
      cellsFrom = ./nix;

      cellBlocks = [
        (std.blockTypes.installables "packages")

        (std.blockTypes.functions "devshellProfiles")
        (std.blockTypes.devshells "devshells")

        (std.blockTypes.runnables "entrypoints")

        (std.blockTypes.functions "lib")

        (std.blockTypes.functions "packages")
        (std.blockTypes.functions "nixosModules")

        (std.blockTypes.functions "overlays")

        (std.blockTypes.nixago "nixago")

        (std.blockTypes.functions "task")
        (std.blockTypes.functions "action")
      ];
    } {
      devShells = inputs.std.harvest inputs.self ["_automation" "devshells"];
      packages = inputs.std.harvest inputs.self [
        ["airflow" "packages"]
        ["prefect" "packages"]
      ];
      nixosModules = builtins.getAttr "x86_64-linux" (
        inputs.std.harvest inputs.self [
          ["airflow" "nixosModules"]
          # ["prefect" "nixosModules"]
        ]
      );
    } (inputs.tullia.fromStd {
      tasks = inputs.std.harvest inputs.self ["tullia" "task"];
      actions = inputs.std.harvest inputs.self ["tullia" "action"];
    });
}
