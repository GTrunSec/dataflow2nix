{
  inputs,
  cell,
}: let
  inherit (inputs) std;
in {
  deploy = std.lib.dev.mkArion cell.arionProfiles.deploy;
  test = std.lib.dev.mkArion cell.arionProfiles.test;
}
