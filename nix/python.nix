
let
  result = import ./machnix.nix { inherit pkgs; };
  nixpkgs_commit = "41c0f49681009ceb57a65b7cd7d4e6d605df712c";
  nixpkgs_sha256 = "0ahi76lb38fcnbzl40k53yjr5vcc75kqg0ddcw6bbc6ckz0z27kg";
  pkgs = import (builtins.fetchTarball {
    name = "nixpkgs";
    url = "https://github.com/nixos/nixpkgs/tarball/${nixpkgs_commit}";
    sha256 = nixpkgs_sha256;
  }) { config = {}; overlays = []; };
  python = pkgs.python37;
  manylinux1 = pkgs.pythonManylinuxPackages.manylinux1;
  overrides = result.overrides manylinux1 pkgs.autoPatchelfHook;
  py = pkgs.python37.override { packageOverrides = overrides; };
in
py.withPackages (ps: result.select_pkgs ps)
