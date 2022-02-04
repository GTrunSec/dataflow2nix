{ pkgs, self, inputs, ... }:

pkgs.devshell.mkShell {
  imports = [ (pkgs.devshell.importTOML ./devshell.toml) ];
  commands = [
    {package = pkgs.airflow-release;}
    ];
  env = [
    {
      name = "PYTHONPATH";
      value = "${pkgs.airflow-release}/${pkgs.python3.sitePackages}:${pkgs.airflow-requirements}/${pkgs.python3.sitePackages}";
    }
  ];
}
