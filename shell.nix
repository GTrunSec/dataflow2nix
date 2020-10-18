with import <nixpkgs> {};
let
  apache_airflow = pkgs.callPackage ./. {python3Packages=python37Packages;};
in
pkgs.mkShell rec {
  name = "apache_airflow";
  buildInputs = [
    apache_airflow
  ];
}
