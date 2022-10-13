{
  inputs = {
    npmlock2nix = {
      url = "github:nix-community/npmlock2nix";
      flake = false;
    };

    mach-nix.url = "github:DavHau/mach-nix";
    mach-nix.inputs.pypi-deps-db.follows = "pypi-deps-db";

    pypi-deps-db.url = "github:DavHau/pypi-deps-db";
    pypi-deps-db.flake = false;
  };
  outputs = {self, ...}: {};
}
