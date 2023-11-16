{ inputs, cell }:
let
  nixpkgs = inputs.nixpkgs.appendOverlays [
    (final: prev: {
      # Add your overlays here
      airflow-sources = prev.callPackage ./packages/_sources/generated.nix { };
    })
  ];
in
{
  apache-airflow = nixpkgs.apache-airflow;
  apache-airflow-latest = nixpkgs.apache-airflow.overrideAttrs (
    old: {
      inherit (nixpkgs.airflow-sources.airflow-latest) src version pname;
      postPatch =
        old.postPatch
        + ''
          substituteInPlace setup.cfg \
            --replace "flask-appbuilder==4.1.4" "flask-appbuilder"
        '';
    }
  );
}
