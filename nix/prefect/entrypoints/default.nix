{ inputs
, cell
,
}:
let
  inherit (inputs.cells-lab.writers.lib) writeShellApplication;
  inherit (cell.lib) nixpkgs;
in
{
  simple = cell.lib.mkPrefectJob {
    extraLibs = [ ];
    runtimeInputs = [ ];
    text = ''
      python "$@"
    '';
  };
}
