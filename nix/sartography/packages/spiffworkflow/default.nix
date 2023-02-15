{
  lib,
  poetry2nix,
  source,
  buildNpmPackage,
  python3,
  extraPackages ? (_: []),
  groups ? [],
}:
# python3Packages.buildPythonPackage {
(poetry2nix.mkPoetryApplication {
  projectDir = ./.;
  inherit (source) src version pname;

  overrides = poetry2nix.overrides.withDefaults (import ./overrides.nix);

  preferWheel = true;

  inherit groups;

  meta = with lib; {
    description = "https://github.com/sartography/SpiffWorkflow/blob/master/requirements.txt";
    homepage = "https://github.com/sartography/SpiffWorkflow";
    license = licenses.lgpl3;
  };
})
