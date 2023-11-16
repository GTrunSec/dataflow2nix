{ inputs, cell }:
let
  l = inputs.nixpkgs.lib // builtins;
in
{
  inherit (inputs.tullia.packages.${inputs.nixpkgs.system}) tullia;
}
