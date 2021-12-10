{ makeTest, pkgs, self, inputs, ... }:
{
  airflow-vm-systemd = makeTest
    {
      name = "airflow-vm-systemd";
      machine = { pkgs, ... }: {
        imports = [
          self.nixosModules.airflow
        ];
        virtualisation.memorySize = 4046;
        services.airflow = {
          enable = true;
        };
      };
      testScript = ''
        start_all()
        machine.wait_for_unit("multi-user.target")
        machine.wait_for_unit("airflow.service")
        machine.wait_for_open_port(8888)
      '';
    }
    {
      inherit pkgs;
      inherit (pkgs) system;
    };
}
