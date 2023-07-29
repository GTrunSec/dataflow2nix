{
  inputs = {
    nixpkgs.follows = "std-ext/nixpkgs";
    std-ext.url = "github:GTrunSec/std-ext";
    std-ext.inputs.std.follows = "std";

    std.url = "github:divnix/std";
    std.inputs.devshell.follows = "std-ext/devshell";
    std.inputs.nixpkgs.follows = "nixpkgs";
    std.inputs.arion.follows = "arion";
    std.inputs.nixago.follows = "std-ext/nixago";
  };

  inputs = {
    arion.url = "github:hercules-ci/arion";
    arion.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = {std, ...} @ inputs:
    std.growOn {
      inherit inputs;
      cellsFrom = ./nix;

      cellBlocks = with std.blockTypes; [
        (functions "devshellProfiles")

        (devshells "devshells")

        (runnables "entrypoints")

        (functions "lib")

        (installables "packages" {ci.build = true;})

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
      nixosModules =
        (
          inputs.std.harvest inputs.self [
            ["airflow" "nixosModules"]
            # ["prefect" "nixosModules"]
          ]
        )
        .x86_64-linux;
    };
  # (inputs.tullia.fromStd {
  #   tasks = inputs.std.harvest inputs.self ["tullia" "task"];
  #   actions = inputs.std.harvest inputs.self ["tullia" "action"];
  # })
}
