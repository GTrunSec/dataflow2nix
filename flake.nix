{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "nixpkgs/8bdebd463bc77c9b83d66e690cba822a51c34b9b";
    ranz2nix = { url = "github:andir/ranz2nix"; flake = false;};
    airflow = { url = "github:GTrunSec/airflow/6c40cee3ad849e41a123b2ea6c25758426fcb961"; flake = false;};
  };

  outputs = { self, nixpkgs }: {

    packages.x86_64-linux.hello = nixpkgs.legacyPackages.x86_64-linux.hello;

    defaultPackage.x86_64-linux = self.packages.x86_64-linux.hello;

  };
}
