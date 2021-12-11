{ pkgs, self, inputs, ... }:

pkgs.devshell.mkShell {
  imports = [ (pkgs.devshell.importTOML ./devshell.toml) ];
  packages = [ ];
  env = [
    {
      name = "PYTHONPATH";
      value = "${pkgs.airflow-release}/${pkgs.python3.sitePackages}:${pkgs.airflow-requirements}/${pkgs.python3.sitePackages}";
    }
  ];
  commands = [
    {
      name = pkgs.nvfetcher-bin.pname;
      help = pkgs.nvfetcher-bin.meta.description;
      command = "export NIX_PATH=nixpkgs=${pkgs.path}; cd $PRJ_ROOT/nix; ${pkgs.nvfetcher-bin}/bin/nvfetcher -c ./sources.toml $@";
    }
  ];
}
