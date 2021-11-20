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

  providersNames = [
    "apache-airflow-providers-cncf-kubernetes"
    "apache-airflow-providers-imap"
    "apache-airflow-providers-http"
    "apache-airflow-providers-sqlite"
    "apache-airflow-providers-ftp"
  ];

  providers-packages = (builtins.listToAttrs
    (map
      (pkgName: {
        value = python3Packages.buildPythonPackage {
          inherit (airflow-sources.${pkgName}) src pname version;
          doCheck = false;
          propagatedBuildInputs = with python3Packages; [
            airflow-requirements
          ];
          postPatch = ''
            substituteInPlace setup.py \
            --replace "apache-airflow>=2.1.0" ""
          '';
        };
        name = pkgName;
      })
      providersNames));
in
python3Packages.buildPythonPackage rec {

  inherit (airflow-sources.airflow-release) src pname version;

  propagatedBuildInputs = with python3Packages; [
    airflow-requirements
    #pytestCheckHook
  ] ++ lib.attrValues providers-packages;

  postPatch = ''
    rm -rf airflow/www/static
    cp -r ${airflow-frontend}/static airflow/www/static

    substituteInPlace setup.cfg \
      --replace "markupsafe>=1.1.1, <2.0" "markupsafe" \
      --replace "flask-login>=0.3, <0.5" "flask-login" \
      --replace "python-slugify>=3.0.0,<5.0" "python-slugify" \
      --replace "pyjwt<2" "pyjwt" \
      --replace "attrs>=20.0, <21.0" "attrs" \
      --replace "importlib_metadata~=1.7" "importlib_metadata"
  '';


  makeWrapperArgs = [ "--prefix PYTHONPATH : $PYTHONPATH" ];

  checkPhase = ''
    export HOME=$(mktemp -d)
    export AIRFLOW_HOME=$HOME
    export AIRFLOW__CORE__UNIT_TEST_MODE=True
    export AIRFLOW_DB="$HOME/airflow.db"
    export PATH=$PATH:$out/bin

    airflow version
    airflow db init
    airflow db reset -y
  '';

  pytestFlagsArray = [
    "tests/core/test_core.py"
  ];

  meta = with lib; {
    description = "Programmatically author, schedule and monitor data pipelines";
    homepage = "http://airflow.apache.org/";
    license = licenses.asl20;
  };
}
