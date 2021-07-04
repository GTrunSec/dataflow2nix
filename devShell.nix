{ pkgs ? import <nixpkgs> { }
, airflow
, ranz2nix
}:
with pkgs;
let
  apache-airflow = callPackage ./nix { inherit airflow ranz2nix; };
in
mkShell rec {
  buildInputs = [
    nixpkgs-fmt
    apache-airflow
  ];
}
