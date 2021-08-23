{ stdenv
, python3Packages
, lib
, airflow-sources
, machlib
, airflow-frontend
}:
let
  airflow-requirements = machlib.mkPython rec {
    requirements = builtins.readFile ./requirements.txt;
    providers = {
      requires = "nixpkgs";
      snakebite = "nixpkgs";
    };
  };

  apache-airflow-providers-ftp = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.apache-airflow-providers-ftp) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ ];
  };

  apache-airflow-providers-sqlite = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.apache-airflow-providers-sqlite) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ ];
  };

  apache-airflow-providers-imap = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.apache-airflow-providers-imap) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ ];
  };

  apache-airflow-providers-http = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.apache-airflow-providers-http) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [
      airflow-requirements
    ];
    postPatch = ''
      substituteInPlace setup.py \
      --replace "apache-airflow>=2.1.0" ""
    '';
  };
in
python3Packages.buildPythonPackage rec {

  inherit (airflow-sources.airflow-release) src pname version;

  doCheck = false;

  propagatedBuildInputs = with python3Packages; [
    apache-airflow-providers-imap
    apache-airflow-providers-http
    apache-airflow-providers-sqlite
    apache-airflow-providers-ftp

    airflow-requirements
  ];

  checkInputs = with python3Packages;[
  ];

  preConfigure = ''
    rm -rf airflow/www/static
    cp -r ${airflow-frontend} airflow/www/static

      substituteInPlace setup.cfg \
        --replace "markupsafe>=1.1.1, <2.0" "markupsafe" \
        --replace "tenacity~=6.2.0" "tenacity" \
        --replace "sqlalchemy>=1.3.18, <1.4" "sqlalchemy" \
        --replace "flask-login>=0.3, <0.5" "flask-login" \
        --replace "python-slugify>=3.0.0,<5.0" "python-slugify" \
        --replace "pyjwt<2" "pyjwt" \
        --replace "attrs>=20.0, <21.0" "attrs" \
        --replace "importlib_metadata~=1.7" "importlib_metadata" \
        --replace "jinja2>=2.10.1, <2.12.0" "jinja2" \
        --replace "gunicorn>=19.5.0" "gunicorn"
  '';


  makeWrapperArgs = [ "--prefix PYTHONPATH : $PYTHONPATH" ];

  meta = with lib; {
    description = "Programmatically author, schedule and monitor data pipelines";
    homepage = "http://airflow.apache.org/";
    license = licenses.asl20;
  };
}
