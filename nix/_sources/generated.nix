# This file was generated by nvfetcher, please do not modify it manually.
{ fetchgit, fetchurl, fetchFromGitHub }:
{
  airflow-latest = {
    pname = "airflow-latest";
    version = "7864693e43c40fd8f0914c05f7e196a007d16d50";
    src = fetchFromGitHub ({
      owner = "apache";
      repo = "airflow";
      rev = "7864693e43c40fd8f0914c05f7e196a007d16d50";
      fetchSubmodules = false;
      sha256 = "sha256-QlVE3RWpOKMsfvDL+DylnTqQUtzKG41KjzaeLB71ThM=";
    });
  };
  airflow-release = {
    pname = "airflow-release";
    version = "2.2.3";
    src = fetchFromGitHub ({
      owner = "apache";
      repo = "airflow";
      rev = "2.2.3";
      fetchSubmodules = false;
      sha256 = "sha256-+Ae1Zo6h1DWHxm5Bu2s3zc7hN1tBF1yVwuQR6c9Xwws=";
    });
  };
  apache-airflow-providers-cncf-kubernetes = {
    pname = "apache-airflow-providers-cncf-kubernetes";
    version = "3.0.2";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-cncf-kubernetes/apache-airflow-providers-cncf-kubernetes-3.0.2.tar.gz";
      sha256 = "sha256-CeoQlq9+1d1JdbC+vxthLyTLnZ/pzQcNLzP7sbcBQ7k=";
    };
  };
  apache-airflow-providers-ftp = {
    pname = "apache-airflow-providers-ftp";
    version = "2.0.1";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-ftp/apache-airflow-providers-ftp-2.0.1.tar.gz";
      sha256 = "sha256-xPWy+mG64/QoG8wLjCwp7agaIQegCq/VB4Hzlf6t0VY=";
    };
  };
  apache-airflow-providers-http = {
    pname = "apache-airflow-providers-http";
    version = "2.0.3";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-http/apache-airflow-providers-http-2.0.3.tar.gz";
      sha256 = "sha256-spI2aGMslFQciqyMQINhjXV1Fd11Uo2wh0RipgREkWc=";
    };
  };
  apache-airflow-providers-imap = {
    pname = "apache-airflow-providers-imap";
    version = "2.2.0";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-imap/apache-airflow-providers-imap-2.2.0.tar.gz";
      sha256 = "sha256-gDeXUTUvdEwkJ6Q4CceZbbyETD5UBJlBBidS9xBfZs0=";
    };
  };
  apache-airflow-providers-sqlite = {
    pname = "apache-airflow-providers-sqlite";
    version = "2.1.0";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-sqlite/apache-airflow-providers-sqlite-2.1.0.tar.gz";
      sha256 = "sha256-GQr4+2M5aXNXKGZ2DTL3MnZyYqU0KoSae36sQFiilpM=";
    };
  };
}
