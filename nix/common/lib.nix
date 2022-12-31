{
  inputs,
  cell,
}: let
  inherit (inputs) std self;
  __inputs__ = inputs.cells-lab.common.lib.callFlake ./lib/lock {};
in {
  inherit __inputs__;
}
