# This file was generated by nvfetcher, please do not modify it manually.
{
  fetchgit,
  fetchurl,
  fetchFromGitHub,
  dockerTools,
}:
{
  prefect = {
    pname = "prefect";
    version = "2.14.4";
    src = fetchFromGitHub {
      owner = "PrefectHQ";
      repo = "prefect";
      rev = "2.14.4";
      fetchSubmodules = false;
      sha256 = "sha256-W1iy5KiYxNEARhkzhg4QSPzX1IYmVNQCCedpiJH8uB0=";
    };
  };
  prefect-latest = {
    pname = "prefect-latest";
    version = "9c0b5b852ac6e9db28bebab508ee0dd15d5a82cc";
    src = fetchgit {
      url = "https://github.com/PrefectHQ/prefect";
      rev = "9c0b5b852ac6e9db28bebab508ee0dd15d5a82cc";
      fetchSubmodules = false;
      deepClone = false;
      leaveDotGit = false;
      sha256 = "sha256-nX7gM0OL90TTZBRD9hSy6Fl3QocmDdBjJJlw0GurPd8=";
    };
    date = "2023-11-15";
  };
}
