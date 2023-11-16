{ inputs, cell }:
let
  inherit (inputs.std-ext.writers.lib) writeShellApplication;
  inherit (cell.lib) nixpkgs;
in
{
  simple = cell.lib.mkPrefectJob {
    extraLibs = [ ];
    text = ''
      python "$@"
    '';
  };
}
