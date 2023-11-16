{
  inputs = {
    nixpkgs.follows = "omnibusStd/nixpkgs";
    omnibusStd.url = "github:gtrunsec/omnibus/?dir=local";
    omnibus.url = "github:gtrunsec/omnibus";
    std.follows = "omnibusStd/std";
  };

  outputs =
    { std, ... }@inputs:
    std.growOn
      {
        inherit inputs;
        cellsFrom = ./nix;

        cellBlocks = with std.blockTypes; [
          (functions "devshellProfiles")

          (devshells "devshells")

          (runnables "entrypoints")

          (functions "lib")

          (installables "packages" { ci.build = true; })

          (functions "nixosModules")
          (functions "pops")

          (functions "overlays")

          (nixago "nixago")

          (functions "task")

          (functions "action")

          (arion "arionComposes")
          (functions "arionProfiles")

          (data "containerJobs")
        ];
      }
      {
        devShells = inputs.std.harvest inputs.self [
          "automation"
          "devshells"
        ];
        overlays =
          (inputs.std.harvest inputs.self [
            [
              "repo"
              "overlays"
            ]
          ]).x86_64-linux;
        packages = inputs.std.harvest inputs.self [
          [
            "airflow"
            "packages"
          ]
          [
            "prefect"
            "packages"
          ]
        ];
        nixosModules =
          (inputs.std.harvest inputs.self [
            [
              "airflow"
              "nixosModules"
            ]
            # ["prefect" "nixosModules"]
          ]).x86_64-linux;
      };
  # (inputs.tullia.fromStd {
  #   tasks = inputs.std.harvest inputs.self ["tullia" "task"];
  #   actions = inputs.std.harvest inputs.self ["tullia" "action"];
  # })
}
