{
  inputs = {
    npm-buildpackage.url = "github:serokell/nix-npm-buildpackage";

    mach-nix.url = "github:DavHau/mach-nix";
    mach-nix.inputs.pypi-deps-db.follows = "pypi-deps-db";

    pypi-deps-db.url = "github:DavHau/pypi-deps-db";
    pypi-deps-db.flake = false;
  };
  outputs = {self, ...}: {};
}
