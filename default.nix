{ stdenv
, python3Packages
, python3
, lib
, callPackage
, airflow
, ranz2nix
}:
with python3.pkgs;
let
  apache_airflow_static = callPackage ./static.nix { inherit ranz2nix airflow;};

  apache_airflow_dep = import ./nix/python.nix;

  apache-airflow-providers-ftp = python3Packages.buildPythonPackage rec {
    pname = "apache-airflow-providers-ftp";
    version = "1.0.0";
    src = python3Packages.fetchPypi {
      inherit pname version;
      sha256 = "sha256-G7HqELlevxy4WZmhu4pU9XtA7UPJRL2kom92mT8dT5M=";
    };
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ apache_airflow_dep ];
    postPatch = ''
    substituteInPlace setup.py \
    --replace "apache-airflow>=2.0.0a0" ""
    '';
  };

  apache-airflow-providers-sqlite = python3Packages.buildPythonPackage rec {
    pname = "apache-airflow-providers-sqlite";
    version = "1.0.0";
    src = python3Packages.fetchPypi {
      inherit pname version;
      sha256 = "sha256-deQsMQRnAJT93cuHHtVKfyX1CNXIkoY9CKUy8WrtChA=";
    };
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ apache_airflow_dep ];
    postPatch = ''
    substituteInPlace setup.py \
    --replace "apache-airflow>=2.0.0a0" ""
    '';
  };
  apache-airflow-providers-imap = python3Packages.buildPythonPackage rec {
    pname = "apache-airflow-providers-imap";
    version = "1.0.0";
    src = python3Packages.fetchPypi {
      inherit pname version;
      sha256 = "sha256-0pI6l2VgEnWZ2jmkkzVPV4lupRL8gXU9RQR4eTVfW0w=";
    };
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ apache_airflow_dep ];
    postPatch = ''
    substituteInPlace setup.py \
    --replace "apache-airflow>=2.0.0a0" ""
    '';
  };

  apache-airflow-providers-http = python3Packages.buildPythonPackage rec {
    pname = "apache-airflow-providers-http";
    version = "1.0.0";
    src = python3Packages.fetchPypi {
      inherit pname version;
      sha256 = "sha256-fngLHLw4/LUeFGkkQIhZccUHeIlFnOVgP8fBc0gZRiM=";
    };
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ apache_airflow_dep ];
    postPatch = ''
    substituteInPlace setup.py \
    --replace "apache-airflow>=2.0.0a0" ""
    '';
  };

  src = airflow;
in
python3Packages.buildPythonPackage rec {
  pname = "apache-airflow";
  version = "2.0.0a1";

  inherit src;

  doCheck = false;

  propagatedBuildInputs = with python3Packages; [ apache_airflow_dep
                                                  apache-airflow-providers-imap
                                                  apache-airflow-providers-http
                                                  apache-airflow-providers-sqlite
                                                  apache-airflow-providers-ftp
                                                ];

  postPatch = ''
    cp -r ${apache_airflow_static}/dist airflow/www/static

    substituteInPlace setup.py \
      --replace "importlib-resources~=1.4" "importlib_resources"

    substituteInPlace setup.cfg \
      --replace "importlib_metadata~=1.7" "importlib_metadata" \
      --replace "importlib_resources~=1.4" "importlib_resources" \
      --replace "sqlalchemy_jsonfield~=1.0" "sqlalchemy-jsonfield" \
      --replace "tzlocal>=1.4,<2.0.0" "tzlocal" \
      --replace "colorlog==4.0.2" "colorlog" \
      --replace "gunicorn>=19.5.0, <20.0" "gunicorn" \
      --replace "flask-appbuilder~=3.1.1" "flask-appbuilder" \
      --replace "flask-caching>=1.5.0, <2.0.0" "flask-caching" \
      --replace "flask-admin==1.5.3" "flask-admin" \
      --replace "flask-login>=0.3, <0.5" "flask_login" \
      --replace "werkzeug~=1.0, >=1.0.1" "werkzeug" \
      --replace "requests>=2.20.0, <2.24.0" "requests"
      '';

  makeWrapperArgs = [ "--prefix PYTHONPATH : $PYTHONPATH" ];
}
