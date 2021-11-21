# This file was generated by nvfetcher, please do not modify it manually.
{ fetchgit, fetchurl, fetchFromGitHub }:
{
  airflow-latest = {
    pname = "airflow-latest";
    version = "9517342b727b977bcc7a99197c802bc084584c5d";
    src = fetchFromGitHub ({
      owner = "apache";
      repo = "airflow";
      rev = "9517342b727b977bcc7a99197c802bc084584c5d";
      fetchSubmodules = false;
      sha256 = "sha256-7zfz/w98n+nnLqy4LvvPy11I6xb3yeta2PdWllQh2/g=";
    });
  };
  airflow-release = {
    pname = "airflow-release";
    version = "2.2.2";
    src = fetchFromGitHub ({
      owner = "apache";
      repo = "airflow";
      rev = "2.2.2";
      fetchSubmodules = false;
      sha256 = "sha256-RTiDzCITl7qQQVGbKCCh3Esy4cPoejjsciGTiNECItA=";
    });
  };
  apache-airflow-providers-cncf-kubernetes = {
    pname = "apache-airflow-providers-cncf-kubernetes";
    version = "2.1.0";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-cncf-kubernetes/apache-airflow-providers-cncf-kubernetes-2.1.0.tar.gz";
      sha256 = "sha256-TxWQ53MTJ9KAoxK5MR3Ye/m12IZT49zq1TPImw+mCwk=";
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
    version = "2.0.1";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-http/apache-airflow-providers-http-2.0.1.tar.gz";
      sha256 = "sha256-rf4jlHHZHvF1dvlLE8t3A1BOzJ86HTuePIlxwg1cZwE=";
    };
  };
  apache-airflow-providers-imap = {
    pname = "apache-airflow-providers-imap";
    version = "2.0.1";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-imap/apache-airflow-providers-imap-2.0.1.tar.gz";
      sha256 = "sha256-Yu9qSl4UyyH8SidTrwJPLa39Jf6V3cOTk189/mpTGy8=";
    };
  };
  apache-airflow-providers-sqlite = {
    pname = "apache-airflow-providers-sqlite";
    version = "2.0.1";
    src = fetchurl {
      url = "https://pypi.io/packages/source/a/apache-airflow-providers-sqlite/apache-airflow-providers-sqlite-2.0.1.tar.gz";
      sha256 = "sha256-mpkeEPi3vEAo/zs4nygGB+BkI/l9QyexNjg+alLZ/Pk=";
    };
  };
}
