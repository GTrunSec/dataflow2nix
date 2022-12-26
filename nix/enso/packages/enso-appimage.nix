{
  lib,
  stdenv,
  fetchurl,
  appimageTools,
  enso-sources,
}: let
  pname = "enso";
  appimageContents = appimageTools.extractType2 {
    inherit pname;
    inherit (enso-sources.enso-appimage) version src;
  };
in
  appimageTools.wrapType2 rec {
    inherit pname;
    inherit (enso-sources.enso-appimage) version src;

    extraPkgs = pkgs:
      with pkgs; [];

    extraInstallCommands = ''
      mv $out/bin/${pname}-${version} $out/bin/${pname}
      install -m 444 -D ${appimageContents}/${pname}.desktop $out/share/applications/koodo-reader.desktop
      substituteInPlace $out/share/applications/koodo-reader.desktop \
        --replace 'Exec=AppRun' 'Exec=${pname}'
    '';

    meta = with lib; {
      description = "Hybrid visual and textual functional programming";
      homepage = "https://github.com/enso-org/enso";
      license = licenses.asl20;
      platforms = platforms.linux;
    };
  }
