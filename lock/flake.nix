{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/f21f11aa2a02cb78651c6d57546c7d7541f9240c";
    npm-buildpackage.url = "github:serokell/nix-npm-buildpackage";
    npm-buildpackage.inputs.nixpkgs.follows = "nixpkgs";

    poetry2nix.url = "github:nix-community/poetry2nix";
    poetry2nix.inputs.nixpkgs.follows = "nixpkgs";

    crane.url = "github:ipetkov/crane";
    crane.inputs.nixpkgs.follows = "nixpkgs";
    crane.inputs.rust-overlay.follows = "rust-overlay";

    rust-overlay.url = "github:oxalica/rust-overlay";
    rust-overlay.inputs.nixpkgs.follows = "nixpkgs";
  };
  outputs = {self, ...}: {};
}
