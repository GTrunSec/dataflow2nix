{
  lib,
  python3Packages,
  source,
  machlib,
  buildNpmPackage,
  nodePackages,
  python3,
}:
# WIP
buildNpmPackage {
  name = "malloy-composer";
  src = source.src;
  buildInputs = [
    python3
    nodePackages.node-gyp
  ];
  installPhase = "cp -r dist $out";
  npmBuild = ''
    npm run build
  '';
}
