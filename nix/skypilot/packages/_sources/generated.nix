# This file was generated by nvfetcher, please do not modify it manually.
{ fetchgit, fetchurl, fetchFromGitHub, dockerTools }:
{
  skypilot = {
    pname = "skypilot";
    version = "84ed51d70b880a9a9e6bb1dfcaa5f38745411ffe";
    src = fetchFromGitHub ({
      owner = "skypilot-org";
      repo = "skypilot";
      rev = "84ed51d70b880a9a9e6bb1dfcaa5f38745411ffe";
      fetchSubmodules = false;
      sha256 = "sha256-6ixVfDReRGKGt0znLhq4O3NjLbQluvp7zcEOfk6tacE=";
    });
    date = "2022-11-15";
  };
}
