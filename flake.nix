{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "nixpkgs/8bdebd463bc77c9b83d66e690cba822a51c34b9b";
    ranz2nix = { url = "github:andir/ranz2nix"; flake = false;};
    airflow = { url = "github:apache/airflow/728518224b9c6469c74b66d9d2b47b13de00fc8c"; flake = false;};
  };

  outputs = { self, nixpkgs }: {

    packages.x86_64-linux.hello = nixpkgs.legacyPackages.x86_64-linux.hello;

    defaultPackage.x86_64-linux = self.packages.x86_64-linux.hello;

  };
}
