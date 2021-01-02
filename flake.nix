{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "nixpkgs/7ff5e241a2b96fff7912b7d793a06b4374bd846c";
    ranz2nix = { url = "github:andir/ranz2nix"; flake = false;};
    flake-utils.url = "github:numtide/flake-utils";
    airflow = { url = "github:apache/airflow"; flake = false;};
  };

  outputs = { self, nixpkgs, ranz2nix, airflow, flake-utils }:
    (flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs {
            inherit system;
          };
        in
          {
            devShell = import ./devShell.nix { inherit pkgs ranz2nix airflow;};
          }
      )
    );
}
