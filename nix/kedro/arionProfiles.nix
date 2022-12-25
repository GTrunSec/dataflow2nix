{
  inputs,
  cell,
}: let
  inherit (cell.packages) prefect prefect-latest;
  inherit (inputs) nixpkgs;

  l = inputs.nixpkgs.lib // builtins;
in {
  deploy = {config, ...}: let
  in {
    config.project.name = "prefect";
    config.services = {
      postgres = {
        service.image = "postgres:13";
        service = {
          ports = ["15432:5432"];
          environment.POSTGRES_USER = "prefect";
          environment.POSTGRES_PASSWORD = "prefect";
        };
      };
      prefect = {
        image.contents = [
          (nixpkgs.buildEnv {
            name = "prefect";
            paths = [
              nixpkgs.tzdata
              nixpkgs.bash
              nixpkgs.coreutils
              nixpkgs.cacert
              prefect
            ];
            pathsToLink = ["/bin" "/etc"];
            postBuild = ''
              cp ${nixpkgs.tzdata}/share/zoneinfo/America/Los_Angeles $out/etc/localtime
            '';
          })
        ];
        service.useHostStore = true;
        service.command = [
          "prefect"
          "orion"
          "start"
          "--host"
          "0.0.0.0"
        ];
        service.ports = [
          "4200:4200" # host:container
        ];
        service.volumes = ["/tmp/prefect:/home"];
        service.environment = {
          HOME = "/home";
          PREFECT_HOME = "/home";
        };
        service.stop_signal = "SIGINT";
      };
    };
  };
}
