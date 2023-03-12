{
  inputs,
  cell,
}: let
  inherit (inputs) std self;
  __inputs__ = inputs.std-ext.common.lib.callFlake ./lib/lock {};
in {
  inherit __inputs__;
}
