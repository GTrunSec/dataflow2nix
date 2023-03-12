{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/796b4a3c1d903c4b9270cd2548fe46f524eeb886";
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
