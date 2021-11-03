{ config, lib, pkgs, ... }:

with lib;

let
  cfg = config.services.airflow;
  baseDir = "airflow";
  airflowCmd = "${pkgs.airflow}/bin/airflow";
  homeBaseDir = "${config.home.homeDirectory}/${baseDir}";
in
{
  options = {
    services.airflow = {
      enable = mkEnableOption "Dropbox daemon";

      path = mkOption {
        type = types.path;
        default = "${config.home.homeDirectory}/Dropbox";
        defaultText =
          literalExample ''"''${config.home.homeDirectory}/Dropbox"'';
        apply = toString; # Prevent copies to Nix store.
        description = "Where to put the Dropbox directory.";
      };
    };
  };

  config = mkIf cfg.enable {
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
          # ensure we have the dirs we need
          $DRY_RUN_CMD ${pkgs.coreutils}/bin/mkdir $VERBOSE_ARG -p \
            ${homeBaseDir}/{.airflow,.airflow-dist,Dropbox}

          # symlink them as needed
          if [[ ! -d ${config.home.homeDirectory}/.airflow ]]; then
            $DRY_RUN_CMD ${pkgs.coreutils}/bin/ln $VERBOSE_ARG -s \
              ${homeBaseDir}/.airflow ${config.home.homeDirectory}/.airflow
          fi

          if [[ ! -d ${escapeShellArg cfg.path} ]]; then
            $DRY_RUN_CMD ${pkgs.coreutils}/bin/ln $VERBOSE_ARG -s \
              ${homeBaseDir}/Dropbox ${escapeShellArg cfg.path}
          fi

          # get the airflow bins if needed
          if [[ ! -f $HOME/.airflow-dist/VERSION ]]; then
            ${pkgs.coreutils}/bin/yes | ${airflowCmd} update
          fi

          ${airflowCmd} start
        '');
      };
    };
  };
}
