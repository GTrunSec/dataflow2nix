{
  inputs,
  cell,
}: let
  inherit (inputs) nixpkgs;
  cmd = type: text: {
    command = {inherit type text;};
  };
in {
  nix =
    cmd "shell" "alejandra flake.nix"
    // {
      dependencies = [nixpkgs.alejandra];
    };
}
