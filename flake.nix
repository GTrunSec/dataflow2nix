{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nixpkgs-prefect.url = "github:NixOS/nixpkgs/95fda953f6db2e9496d2682c4fc7b82f959878f7";

    cells-lab.url = "github:GTrunSec/cells-lab";

    std.url = "github:divnix/std";
    std.inputs.nixpkgs.follows = "nixpkgs";
    std.inputs.arion.follows = "arion";
  };

  inputs = {
    # tullia.url = "github:input-output-hk/tullia";
    tullia.url = "github:input-output-hk/tullia?ref=refs/pull/9/head";
    tullia.inputs.nixpkgs.follows = "nixpkgs";

    arion.url = "github:hercules-ci/arion";
    arion.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = {std, ...} @ inputs:
    std.growOn {
      inherit inputs;
      cellsFrom = ./nix;

      cellBlocks = with std.blockTypes; [
        (installables "packages")

        (functions "devshellProfiles")
        (devshells "devshells")

        (runnables "entrypoints")

        (functions "lib")

        (functions "packages")
        (functions "nixosModules")

        (functions "overlays")

        (nixago "nixago")

        (functions "task")

        (functions "action")

        (arion "arionComposes")
        (functions "arionProfiles")

        (data "containerJobs")
      ];
    } {
      devShells = inputs.std.harvest inputs.self ["automation" "devshells"];
      overlays = (inputs.std.harvest inputs.self [["common" "overlays"]]).x86_64-linux;
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
