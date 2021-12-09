{ makeTest, pkgs, self, inputs, ... }:
{
  airflow-vm-systemd = makeTest
    {
      name = "airflow-vm-systemd";
      machine = { ... }: {
        imports = [
          inputs.home-manager.nixosModules.home-manager
          {
            nixpkgs.config.packageOverrides = pkgs: {
              inherit (self.packages.x86_64-linux) airflow-release;
            };
          }
          {
            home-manager.useGlobalPkgs = true;
            home-manager.useUserPackages = true;
            home-manager.users.tests = { pkgs, ... }: {
              imports = [
                self.homeModules.airflow
              ];
              services.airflow = {
                enable = true;
              };
            };
          }
        ];
        users.users.tests = {
          isNormalUser = true;
        };
        services.dbus = {
          enable = true;
        };
        virtualisation.memorySize = 4046;
      };
      testScript = ''
        start_all()
        machine.wait_for_unit("multi-user.target")
        machine.systemctl("list-units --type=service --no-pager", "tests")
        machine.systemctl("is-system-running --wait")
        #machine.wait_for_open_port(8888)
      '';
    }
    {
      inherit pkgs;
      inherit (pkgs) system;
    };
}
