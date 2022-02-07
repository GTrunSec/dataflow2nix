{ config
, lib
, pkgs
, ...
}:
with lib;
let
  cfg = config.services.airflow;
  airflowCmd = "${cfg.package}/bin/airflow";
in
{
  options = {
    services.airflow = {
      enable = mkEnableOption "airflow daemon";
      path = mkOption {
        type = types.path;
        default = "/var/lib/airflow";
        defaultText = literalExample ''"''${config.home.homeDirectory}/airflow"'';
        apply = toString;
        description = "Where to put the airflow directory.";
      };
      package = mkOption {
        type = types.package;
        default = pkgs.airflow-release;
      };
      port = mkOption {
        type = types.int;
        default = 8888;
        description = "Where the airflow port number";
      };
      ip = mkOption {
        type = types.str;
        default = "127.0.0.1";
        description = "Where the airflow ip address";
      };
      postgresql = mkOption {
        type = types.bool;
        default = false;
        description = "Whether to enable postgresql support";
      };
    };
  };
  config = mkIf cfg.enable {
    environment.systemPackages = [ cfg.package ];
    services.postgresql = mkIf cfg.postgresql {
      enable = true;
      enableTCPIP = true;
      ensureDatabases = [ "airflow_db" ];
      ensureUsers = [
        {
          name = "airflow_user";
          ensurePermissions."DATABASE airflow_db" = "ALL PRIVILEGES";
        }
      ];
    };
    users.users.airflow = {
      isSystemUser = true;
      group = "airflow";
    };
    users.groups.airflow = { };
    systemd.services.airflow = {
      description = "airflow Daemon";
      after = [ "network.target" ];
      wantedBy = [ "multi-user.target" ];
      environment = { HOME = "${cfg.path}"; };
      script = ''
        if [[ ! -d ${cfg.path}/airflow/airflow.cfg ]]; then
        ${airflowCmd} db init
        fi
        ${airflowCmd} webserver -p ${toString cfg.port} -H ${cfg.ip}
      '';
      serviceConfig = {
        Type = "simple";
        User = "airflow";
        Group = "airflow";
        Restart = "on-failure";
        WorkingDirectory = "${cfg.path}";
        ReadWritePaths = "${cfg.path}";
        RuntimeDirectory = "airflow";
        CacheDirectory = "airflow";
        StateDirectory = "airflow";
        ProtectSystem = "full";
        PrivateTmp = true;
        PrivateUsers = true;
        PrivateDevices = true;
        ProtectClock = true;
        ProtectKernelLogs = true;
        Nice = 10;
        ExecReload = "${pkgs.coreutils}/bin/kill -HUP $MAINPID";
        ExecStop = "${airflowCmd} stop";
      };
    };
  };
}
