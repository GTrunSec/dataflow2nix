{
  inputs,
  cell,
}: let
  inherit (inputs) std self;
  __default__ = inputs.cells-lab.main.lib.callFlake "${(std.incl self ["lock"])}/lock" {};
in {
  inherit __default__;
}
