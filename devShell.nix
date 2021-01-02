{ pkgs ? import <nixpkgs> {}
, airflow
, ranz2nix
}:
with pkgs;
let
  apache-airflow = callPackage ./default.nix { inherit airflow ranz2nix; python3Packages=python37Packages;};
in
mkShell rec {
  buildInputs = [
    apache-airflow
  ];
}
