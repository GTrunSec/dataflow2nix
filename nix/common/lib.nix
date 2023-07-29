{
  inputs,
  cell,
}: let
  inherit (inputs) std self;
  __inputs__ = (inputs.std-ext.inputs.flops.inputs.call-flake ./lib/lock).inputs;
in {
  inherit __inputs__;
}
