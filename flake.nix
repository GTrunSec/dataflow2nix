{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nixpkgs-lock.follows = "nixpkgs";

    cells-lab.url = "github:GTrunSec/cells-lab";
    std.follows = "cells-lab/std";
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
      ];
    } {
      devShells = inputs.std.harvest inputs.self ["_main" "devshells"];
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
    };
}
