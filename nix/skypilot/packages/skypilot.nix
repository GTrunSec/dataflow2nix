{
  buildPythonApplication,
  lib,
  skypilot-sources,
  setuptools,
  python3Packages,
  awscli2,
  bash,
}:
buildPythonApplication rec {
  inherit (skypilot-sources.skypilot) version src pname;

  format = "pyproject";

  nativeBuildInputs = [ setuptools ];

  propagatedBuildInputs = with python3Packages; [
    pulp
    packaging
    pycryptodome
    pendulum
    pandas
    networkx
    jsonschema
    protobuf
    psutil
    colorama
    click
    rich
    ray
    jinja2
    grpcio
    tabulate
    awscli2
    prettytable
    oauth2client
    pyyaml
  ];

  postPatch = ''
    substituteInPlace sky/setup_files/setup.py \
    --replace "pycryptodome==3.12.0" "pycryptodome" \
    --replace "protobuf<4.0.0" "protobuf" \
    --replace "colorama<0.4.5" "colorama" \
    --replace "grpcio>=1.32.0,<=1.43.0" "grpcio" \
    --replace "click<=8.0.4,>=7.0" "click" \
    --replace "rich>=10.0.0" "rich" \
    --replace "ray[default]>=1.9.0,<=2.0.1" "ray"

    substituteInPlace sky/utils/command_runner.py sky/utils/subprocess_utils.py \
    --replace "/bin/bash" "${bash}/bin/bash"
  '';

  meta = with lib; {
    description = "SkyPilot is a framework for easily running machine learning workloads on any cloud through a unified interface";
    homepage = "https://github.com/skypilot-org/skypilot";
    license = licenses.asl20;
    maintainers = with maintainers; [ gtrunsec ];
  };
}
