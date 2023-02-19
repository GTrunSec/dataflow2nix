{
  inputs,
  cell,
}: let
  inherit (inputs) nixpkgs;
in {
  default.packages = [
    (nixpkgs.python3.buildEnv.override {
      extraLibs = with nixpkgs.python3Packages; [
        cell.packages.spiffworkflow
        jinja2
        restrictedpython
        redis
      ];
      ignoreCollisions = true;
    })
  ];
}
