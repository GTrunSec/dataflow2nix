{
  inputs,
  cell,
}: let
  inherit (inputs) std self;
  __inputs__ = inputs.cells-lab.main.lib.callFlake "${(std.incl self ["lock"])}/lock" {};
in {
  inherit __inputs__;
}
