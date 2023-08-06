{
  inputs,
  cell,
}: let
  inherit (inputs) std;

  l = inputs.nixpkgs.lib // builtins;
in {
  deploy = std.lib.dev.mkArion cell.arionProfiles.deploy;
}
