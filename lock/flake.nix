{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/3a86856a13c88c8c64ea32082a851fefc79aa700";
    npm-buildpackage.url = "github:serokell/nix-npm-buildpackage";
    npm-buildpackage.inputs.nixpkgs.follows = "nixpkgs";

    mach-nix.url = "github:DavHau/mach-nix";
    mach-nix.inputs.pypi-deps-db.follows = "pypi-deps-db";
    mach-nix.inputs.nixpkgs.follows = "nixpkgs";

    pypi-deps-db.url = "github:DavHau/pypi-deps-db/6e1231f7aff2f4d31ef215065b2570e1cac8f251";
    pypi-deps-db.flake = false;

    crane.url = "github:ipetkov/crane";
    crane.inputs.nixpkgs.follows = "nixpkgs";
    crane.inputs.rust-overlay.follows = "rust-overlay";

    rust-overlay.url = "github:oxalica/rust-overlay";
    rust-overlay.inputs.nixpkgs.follows = "nixpkgs";
  };
  outputs = {self, ...}: {};
}
