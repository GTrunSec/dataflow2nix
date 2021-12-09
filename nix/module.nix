{ config, lib, pkgs, ... }:

with lib;

let
  cfg = config.services.airflow;
  airflowCmd = "${pkgs.airflow-release}/bin/airflow";
  homeBaseDir = "${config.home.homeDirectory}/.config/";
in
{
  options = {
    services.airflow = {
      enable = mkEnableOption "airflow daemon";

      path = mkOption {
        type = types.path;
        default = "${config.home.homeDirectory}/airflow";
        defaultText =
          literalExample ''"''${config.home.homeDirectory}/airflow"'';
        apply = toString; # Prevent copies to Nix store.
        description = "Where to put the airflow directory.";
      };
    };
  };

  config = mkIf cfg.enable {
    home.packages = [ pkgs.airflow-release ];
    systemd.user.services.airflow = {
      Unit = { Description = "airflow daemon"; };

      Install = { WantedBy = [ "network.target" ]; };

      Service = {
        Environment = [
          "HOME=${homeBaseDir}"
        ];

        Type = "simple";
        Restart = "on-failure";
        PrivateTmp = true;
        ProtectSystem = "full";
        Nice = 10;

        ExecReload = "${pkgs.coreutils}/bin/kill -HUP $MAINPID";
        ExecStop = "${airflowCmd} stop";
        ExecStart = toString (pkgs.writeShellScript "airflow-start" ''
          if [[ ! -d ${config.home.homeDirectory}/airflow ]]; then
          ${airflowCmd} db init
          fi
          ${airflowCmd} webserver -p 8888 -H 127.0.0.1
        '');
      };
    };
  };
}
