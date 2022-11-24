{
  system,
  enso-sources,
  crane,
  rust-bin,
  pkg-config,
  openssl,
}: let
  craneLib = crane.overrideToolchain (rust-bin.fromRustupToolchainFile (enso-sources.enso.src + "/rust-toolchain.toml"));
in
  craneLib.buildPackage {
    inherit (enso-sources.enso) pname version;
    src = craneLib.cleanCargoSource enso-sources.enso.src;
    buildInputs = [openssl.dev];
    nativeBuildInputs = [pkg-config];
  }
