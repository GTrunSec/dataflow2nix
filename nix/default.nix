{ stdenv
, python3Packages
, lib
, airflow-sources
, airflow-frontend
}:
let
  cattrs = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.cattrs) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ attrs ];
    postPatch = ''
      substituteInPlace setup.py \
      --replace "attrs >= 20.1.0" "attrs"
    '';
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
    propagatedBuildInputs = with python3Packages; [ requests ];
    postPatch = ''
      substituteInPlace setup.py \
      --replace "apache-airflow>=2.1.0" ""
    '';
  };

  marshmallow-oneofschema = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.marshmallow-oneofschema) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ marshmallow ];
  };
  SQLAlchemy-JSONField = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.SQLAlchemy-JSONField) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ setuptools_scm sqlalchemy toml ];
  };
  importlib-resources = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.importlib-resources) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ setuptools_scm toml ];
  };
  python-nvd3 = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.python-nvd3) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ python-slugify jinja2 ];
  };
  python-slugify = python3Packages.buildPythonPackage rec {
    inherit (airflow-sources.python-slugify) src pname version;
    doCheck = false;
    propagatedBuildInputs = with python3Packages; [ unidecode text-unidecode ];
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

    alembic
    argcomplete
    cached-property
    colorlog
    configparser
    croniter
    dill
    flask
    flask-admin
    flask-bcrypt
    flask-appbuilder
    flask-caching
    flask-jwt-extended
    flask_login
    flask-swagger
    flask_wtf
    funcsigs
    future
    GitPython
    gunicorn
    iso8601
    json-merge-patch
    jinja2
    ldap3
    lxml
    lazy-object-proxy
    markdown
    markupsafe
    pandas
    pendulum
    psutil
    pygments
    python-daemon
    python-dateutil
    requests
    setproctitle
    tabulate
    tenacity
    termcolor
    text-unidecode
    thrift
    tzlocal
    unicodecsv
    zope_deprecation
    openapi-spec-validator
    swagger-ui-bundle
    inflection
    tenacity
    pyjwt
    httpx
    clickclick
    graphviz
    cattrs
    flask_login
    rich
    importlib-metadata
    marshmallow-oneofschema
    SQLAlchemy-JSONField
    importlib-resources
    python-nvd3
  ];

  checkInputs = with python3Packages;[
    snakebite
    nose
  ];

  preConfigure = ''
    #cp -r airflow-frontend/dist airflow/www/static

      # substituteInPlace setup.py \
      #   --replace "importlib-metadata~=1.7" "importlib-metadata"

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
