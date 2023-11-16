{ inputs, cell }:
let
  inherit (inputs) nixpkgs;
  inputs' = (inputs.omnibus.pops.flake.setSystem nixpkgs.system).inputs;
  inherit (inputs.omnibus.pops.self.load.inputs) POP flops;
in
{
  configs = inputs.omnibus.pops.configs {
    inputs = {
      inputs = {
        inherit (inputs') nixfmt topiary nur;
        inherit (inputs) std;
        inherit nixpkgs;
      };
    };
  };
}
