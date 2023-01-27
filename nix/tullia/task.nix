{
  inputs,
  cell,
}: let
  inherit (inputs) nixpkgs;
  cmd = type: text: {
    command = {inherit type text;};
  };
in {
    ci = {
    config ? {},
    pkgs,
    ...
  }:
    cmd "shell" ''
      echo Fact:
      cat ${pkgs.writeText "fact.json" (builtins.toJSON (config.facts.push or ""))}
      echo CI passed
    ''
    // {
      after = [
        "format-nix"
        "update"
      ];
    };

  update = {
    pkgs,
    config,
    ...
  }:
    cmd "shell" "nix flake lock --update-input std"
    // {
      preset.nix.enable = true;
      # mkdir -p /local/home for isolation
      env.HOME = "/home";
    };

  format-nix =
    cmd "shell" "alejandra flake.nix"
    // {
      dependencies = [nixpkgs.alejandra];
    };
}
