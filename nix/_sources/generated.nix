# This file was generated by nvfetcher, please do not modify it manually.
{ fetchgit, fetchurl }:
{
  airflow-latest = {
    pname = "airflow-latest";
    version = "0264fea8c2024d7d3d64aa0ffa28a0cfa48839cd";
    src = fetchgit {
      url = "https://github.com/apache/airflow";
      rev = "0264fea8c2024d7d3d64aa0ffa28a0cfa48839cd";
      fetchSubmodules = false;
      deepClone = false;
      leaveDotGit = false;
      sha256 = "1v3w2bpbvqypjws395mvcz1kkjdwkj77bksapj40n8gqjpzvnjl3";
    };
  };
  airflow-release = {
    pname = "airflow-release";
    version = "2.1.3";
    src = fetchgit {
      url = "https://github.com/apache/airflow";
      rev = "2.1.3";
      fetchSubmodules = false;
      deepClone = false;
      leaveDotGit = false;
      sha256 = "07nwm0k9fr374dva15s36s1xg8q5ka1jvjxy80bb7alzc3vn9dkr";
    };
  };
  apache-airflow-providers-ftp = {
    pname = "apache-airflow-providers-ftp";
    version = "2.0.0";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-ftp/apache-airflow-providers-ftp-2.0.0.tar.gz";
      sha256 = "1gmd627naxy83vxryk06w042g5035mx7rd8sv9hpk9zfn8hcpcir";
    };
  };
  apache-airflow-providers-http = {
    pname = "apache-airflow-providers-http";
    version = "2.0.0";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-http/apache-airflow-providers-http-2.0.0.tar.gz";
      sha256 = "08r57agv666m12cxi0qygy66n9y4payfgmws2kzfl8qhy6lhj8yz";
    };
  };
  apache-airflow-providers-imap = {
    pname = "apache-airflow-providers-imap";
    version = "2.0.0";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-imap/apache-airflow-providers-imap-2.0.0.tar.gz";
      sha256 = "0rm8d374r95w7ay5z2k34qr0s9d5wk9pdmhgd5yfzy8xrs2p2xvg";
    };
  };
  apache-airflow-providers-sqlite = {
    pname = "apache-airflow-providers-sqlite";
    version = "2.0.0";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-sqlite/apache-airflow-providers-sqlite-2.0.0.tar.gz";
      sha256 = "090j67cks1sld11blh2hh2b78gbkcr4ah0aksx614s477mg8lz41";
    };
  };
}
