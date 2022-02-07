{ pkgs
, inputs
, devshell
, ...
}:
devshell.mkShell {
  imports = [ (devshell.importTOML ./devshell.toml) ];
  commands = [
    {
      name = "airflow";
      package = pkgs.airflow-release;
    }
  ];
  env = [
    {
      name = "PYTHONPATH";
      value = "${pkgs.airflow-release}/${pkgs.python3.sitePackages}:${pkgs.airflow-requirements}/${pkgs.python3.sitePackages}";
    }
  ];
}
