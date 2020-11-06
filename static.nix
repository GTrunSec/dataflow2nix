{ stdenv
, lib
, nodejs-12_x
, runCommand
, callPackage
, fetchurl
, fetchFromGitHub
}:
let

  flakeLock = lib.importJSON ./flake.lock;
  loadInput = { locked, ... }:
    assert locked.type == "github";
    builtins.fetchTarball {
      url = "https://github.com/${locked.owner}/${locked.repo}/archive/${locked.rev}.tar.gz";
      sha256 = locked.narHash;
    };

  ranz2nix = loadInput flakeLock.nodes.ranz2nix;
  src = loadInput flakeLock.nodes.airflow;

  noderanz = callPackage ranz2nix {

    nodejs = nodejs-12_x;
    sourcePath = src + "/airflow/www";

    packageOverride = name: spec: if name == "minimist" && spec ? resolved && spec.resolved == "" then {
      resolved = "file://" + (
        toString (
          fetchurl {
            url = "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz";
            sha256 = "0w7jll4vlqphxgk9qjbdjh3ni18lkrlfaqgsm7p14xl3f7ghn3gc";
          }
        )
      );
    } else {};
  };
  node_modules = noderanz.patchedBuild;
in
stdenv.mkDerivation {

  name = "airflow-static";

  inherit src;

  nativeBuildInputs = [ nodejs-12_x ];

  sourceRoot = "source/airflow/www";

  postUnpack = ''
        chmod -R +rw .
        '';

  NODE_ENV = "production";

  buildPhase = ''
          export HOME=$(mktemp -d)
          ln -sf ${node_modules}/node_modules node_modules
          ln -sf ${node_modules.lockFile} package-lock.json
          npm run build
        '';

  installPhase = ''
          cp -rv static $out
        '';
}
