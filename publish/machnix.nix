{ pkgs, ... }:
with builtins;
with pkgs.lib;
let
  pypi_fetcher_src = builtins.fetchTarball {
    name = "nix-pypi-fetcher";
    url = "https://github.com/DavHau/nix-pypi-fetcher/tarball/22aa55de07c3c2fc0afc8ec274082ccb66ed9393";
    # Hash obtained using `nix-prefetch-url --unpack <url>`
    sha256 = "0skzdfz5k4bpbcxczlx0458586ygmhp0x7m6ld9xx58ajsbk3xx3";
  };
  pypiFetcher = import pypi_fetcher_src { inherit pkgs; };
  fetchPypi = pypiFetcher.fetchPypi;
  fetchPypiWheel = pypiFetcher.fetchPypiWheel;
  is_py_module = pkg:
    isAttrs pkg && hasAttr "pythonModule" pkg;
  normalizeName = name: (replaceStrings ["_"] ["-"] (toLower name));
  replace_deps = oldAttrs: inputs_type: self:
    map (pypkg:
      let
        pname = normalizeName (get_pname pypkg);
      in
        if self ? "${pname}" && pypkg != self."${pname}" then
          trace "Updated inherited nixpkgs dep ${pname} from ${pypkg.version} to ${self."${pname}".version}"
          self."${pname}"
        else
          pypkg
    ) (oldAttrs."${inputs_type}" or []);
  override = pkg:
    if hasAttr "overridePythonAttrs" pkg then
        pkg.overridePythonAttrs
    else
        pkg.overrideAttrs;
  nameMap = {
    pytorch = "torch";
  };
  get_pname = pkg:
    let
      res = tryEval (
        if pkg ? src.pname then
          pkg.src.pname
        else if pkg ? pname then
          let pname = pkg.pname; in
            if nameMap ? "${pname}" then nameMap."${pname}" else pname
          else ""
      );
    in
      toString res.value;
  get_passthru = python: pypi_name: nix_name:
    # if pypi_name is in nixpkgs, we must pick it, otherwise risk infinite recursion.
    let
      pname = if hasAttr "${pypi_name}" python then pypi_name else nix_name;
    in
      if hasAttr "${pname}" python then 
        let result = (tryEval 
          (if isNull python."${pname}" then
            {}
          else
            python."${pname}".passthru)); 
        in
          if result.success then result.value else {}
      else {};
  tests_on_off = enabled: pySelf: pySuper:
    let
      mod = {
        doCheck = enabled;
        doInstallCheck = enabled;
      };
    in
    {
      buildPythonPackage = args: pySuper.buildPythonPackage ( args // {
        doCheck = enabled;
        doInstallCheck = enabled;
      } );
      buildPythonApplication = args: pySuper.buildPythonPackage ( args // {
        doCheck = enabled;
        doInstallCheck = enabled;
      } );
    };
  pname_passthru_override = pySelf: pySuper: {
    fetchPypi = args: (pySuper.fetchPypi args).overrideAttrs (oa: {
      passthru = { inherit (args) pname; };
    });
  };
  mergeOverrides = with pkgs.lib; foldl composeExtensions (self: super: {});
  merge_with_overr = enabled: overr:
    mergeOverrides [(tests_on_off enabled) pname_passthru_override overr];
  select_pkgs = ps: [
    ps."alembic"
    ps."argcomplete"
    ps."bowler"
    ps."cached-property"
    ps."cattrs"
    ps."colorlog"
    ps."configparser"
    ps."connexion"
    ps."croniter"
    ps."cryptography"
    ps."dill"
    ps."flask-admin"
    ps."flask-appbuilder"
    ps."flask-babel"
    ps."flask-caching"
    ps."flask-swagger"
    ps."funcsigs"
    ps."future"
    ps."gitpython"
    ps."graphviz"
    ps."gunicorn"
    ps."iso8601"
    ps."jinja2"
    ps."json-merge-patch"
    ps."lazy-object-proxy"
    ps."ldap3"
    ps."lxml"
    ps."markdown"
    ps."marshmallow-oneofschema"
    ps."pandas"
    ps."pendulum"
    ps."psutil"
    ps."pygments"
    ps."python-daemon"
    ps."python-dateutil"
    ps."python-slugify"
    ps."requests"
    ps."setproctitle"
    ps."sqlalchemy"
    ps."sqlalchemy-jsonfield"
    ps."swagger-ui-bundle"
    ps."tabulate"
    ps."tenacity"
    ps."termcolor"
    ps."text-unidecode"
    ps."thrift"
    ps."typing-extensions"
    ps."tzlocal"
    ps."unicodecsv"
    ps."zope.deprecation"
  ];
  overrides = manylinux1: autoPatchelfHook: merge_with_overr false (python-self: python-super: let self = {
    "alembic" = python-self.buildPythonPackage {
      pname = "alembic";
      version = "1.4.3";
      src = fetchPypiWheel "alembic" "1.4.3" "alembic-1.4.3-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "alembic" "alembic") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ mako python-dateutil python-editor sqlalchemy ];
    };
    "apispec" = python-self.buildPythonPackage {
      pname = "apispec";
      version = "3.3.2";
      src = fetchPypiWheel "apispec" "3.3.2" "apispec-3.3.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "apispec" "apispec") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ pyyaml ];
    };
    "appdirs" = python-self.buildPythonPackage {
      pname = "appdirs";
      version = "1.4.4";
      src = fetchPypiWheel "appdirs" "1.4.4" "appdirs-1.4.4-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "appdirs" "appdirs") // { provider = "wheel"; };
    };
    "argcomplete" = python-self.buildPythonPackage {
      pname = "argcomplete";
      version = "1.12.1";
      src = fetchPypiWheel "argcomplete" "1.12.1" "argcomplete-1.12.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "argcomplete" "argcomplete") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ importlib-metadata ];
    };
    "attrs" = python-self.buildPythonPackage {
      pname = "attrs";
      version = "20.2.0";
      src = fetchPypiWheel "attrs" "20.2.0" "attrs-20.2.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "attrs" "attrs") // { provider = "wheel"; };
    };
    "babel" = python-self.buildPythonPackage {
      pname = "babel";
      version = "2.8.0";
      src = fetchPypiWheel "babel" "2.8.0" "Babel-2.8.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "babel" "Babel") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ pytz ];
    };
    "bowler" = python-self.buildPythonPackage {
      pname = "bowler";
      version = "0.9.0";
      src = fetchPypiWheel "bowler" "0.9.0" "bowler-0.9.0-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "bowler" "bowler") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ attrs click fissix moreorless volatile ];
    };
    "cached-property" = python-self.buildPythonPackage {
      pname = "cached-property";
      version = "1.5.2";
      src = fetchPypiWheel "cached-property" "1.5.2" "cached_property-1.5.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "cached-property" "cached-property") // { provider = "wheel"; };
    };
    "cattrs" = python-self.buildPythonPackage {
      pname = "cattrs";
      version = "1.0.0";
      src = fetchPypiWheel "cattrs" "1.0.0" "cattrs-1.0.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "cattrs" "cattrs") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ attrs ];
    };
    "certifi" = python-self.buildPythonPackage {
      pname = "certifi";
      version = "2020.6.20";
      src = fetchPypiWheel "certifi" "2020.6.20" "certifi-2020.6.20-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "certifi" "certifi") // { provider = "wheel"; };
    };
    "cffi" = python-self.buildPythonPackage {
      pname = "cffi";
      version = "1.14.3";
      src = fetchPypiWheel "cffi" "1.14.3" "cffi-1.14.3-cp37-cp37m-manylinux1_x86_64.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "cffi" "cffi") // { provider = "wheel"; };
      nativeBuildInputs = [ autoPatchelfHook ];
      autoPatchelfIgnoreNotFound = true;
      propagatedBuildInputs = with python-self; manylinux1 ++ [ pycparser ];
    };
    "chardet" = python-self.buildPythonPackage {
      pname = "chardet";
      version = "3.0.4";
      src = fetchPypiWheel "chardet" "3.0.4" "chardet-3.0.4-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "chardet" "chardet") // { provider = "wheel"; };
    };
    "click" = python-self.buildPythonPackage {
      pname = "click";
      version = "7.1.2";
      src = fetchPypiWheel "click" "7.1.2" "click-7.1.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "click" "click") // { provider = "wheel"; };
    };
    "clickclick" = python-self.buildPythonPackage {
      pname = "clickclick";
      version = "20.10.2";
      src = fetchPypiWheel "clickclick" "20.10.2" "clickclick-20.10.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "clickclick" "clickclick") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ click pyyaml ];
    };
    "colorama" = python-self.buildPythonPackage {
      pname = "colorama";
      version = "0.4.3";
      src = fetchPypiWheel "colorama" "0.4.3" "colorama-0.4.3-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "colorama" "colorama") // { provider = "wheel"; };
    };
    "colorlog" = python-self.buildPythonPackage {
      pname = "colorlog";
      version = "4.0.2";
      src = fetchPypiWheel "colorlog" "4.0.2" "colorlog-4.0.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "colorlog" "colorlog") // { provider = "wheel"; };
    };
    "configparser" = python-self.buildPythonPackage {
      pname = "configparser";
      version = "5.0.1";
      src = fetchPypiWheel "configparser" "5.0.1" "configparser-5.0.1-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "configparser" "configparser") // { provider = "wheel"; };
    };
    "connexion" = python-self.buildPythonPackage {
      pname = "connexion";
      version = "2.7.0";
      src = fetchPypiWheel "connexion" "2.7.0" "connexion-2.7.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "connexion" "connexion") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ clickclick flask inflection jsonschema openapi-spec-validator pyyaml requests ];
    };
    "croniter" = python-self.buildPythonPackage {
      pname = "croniter";
      version = "0.3.35";
      src = fetchPypiWheel "croniter" "0.3.35" "croniter-0.3.35-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "croniter" "croniter") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ natsort python-dateutil ];
    };
    "cryptography" = override python-super.cryptography ( oldAttrs: {
      pname = "cryptography";
      version = "3.1.1";
      passthru = (get_passthru python-super "cryptography" "cryptography") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [ cffi ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [ cffi six ];
      src = fetchPypi "cryptography" "3.1.1";
    });
    "dill" = override python-super.dill ( oldAttrs: {
      pname = "dill";
      version = "0.3.2";
      passthru = (get_passthru python-super "dill" "dill") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
      src = fetchPypi "dill" "0.3.2";
    });
    "dnspython" = python-self.buildPythonPackage {
      pname = "dnspython";
      version = "2.0.0";
      src = fetchPypiWheel "dnspython" "2.0.0" "dnspython-2.0.0-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "dnspython" "dns") // { provider = "wheel"; };
    };
    "docutils" = python-self.buildPythonPackage {
      pname = "docutils";
      version = "0.16";
      src = fetchPypiWheel "docutils" "0.16" "docutils-0.16-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "docutils" "docutils") // { provider = "wheel"; };
    };
    "email-validator" = python-self.buildPythonPackage {
      pname = "email-validator";
      version = "1.1.1";
      src = fetchPypiWheel "email-validator" "1.1.1" "email_validator-1.1.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "email-validator" "email_validator") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ dnspython idna ];
    };
    "fissix" = python-self.buildPythonPackage {
      pname = "fissix";
      version = "20.8.0";
      src = fetchPypiWheel "fissix" "20.8.0" "fissix-20.8.0-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "fissix" "fissix") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ appdirs ];
    };
    "flask" = python-self.buildPythonPackage {
      pname = "flask";
      version = "1.1.2";
      src = fetchPypiWheel "flask" "1.1.2" "Flask-1.1.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "flask" "flask") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ click itsdangerous jinja2 werkzeug ];
    };
    "flask-admin" = python-self.buildPythonPackage {
      pname = "flask-admin";
      version = "1.5.5";
      src = fetchPypiWheel "flask-admin" "1.5.5" "Flask_Admin-1.5.5-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "flask-admin" "flask-admin") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ flask wtforms ];
    };
    "flask-appbuilder" = python-self.buildPythonPackage {
      pname = "flask-appbuilder";
      version = "3.1.0";
      src = fetchPypiWheel "flask-appbuilder" "3.1.0" "Flask_AppBuilder-3.1.0-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "flask-appbuilder" "flask-appbuilder") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ apispec click colorama email-validator flask flask-babel flask-jwt-extended flask-login flask-openid flask-sqlalchemy flask-wtf jsonschema marshmallow marshmallow-enum marshmallow-sqlalchemy prison pyjwt python-dateutil sqlalchemy-utils ];
    };
    "flask-babel" = python-self.buildPythonPackage {
      pname = "flask-babel";
      version = "1.0.0";
      src = fetchPypiWheel "flask-babel" "1.0.0" "Flask_Babel-1.0.0-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "flask-babel" "flaskbabel") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ babel flask jinja2 pytz ];
    };
    "flask-caching" = python-self.buildPythonPackage {
      pname = "flask-caching";
      version = "1.9.0";
      src = fetchPypiWheel "flask-caching" "1.9.0" "Flask_Caching-1.9.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "flask-caching" "flask-caching") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ flask ];
    };
    "flask-jwt-extended" = override python-super.flask-jwt-extended ( oldAttrs: {
      pname = "flask-jwt-extended";
      version = "3.24.1";
      passthru = (get_passthru python-super "flask-jwt-extended" "flask-jwt-extended") // { provider = "nixpkgs"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
    });
    "flask-login" = python-self.buildPythonPackage {
      pname = "flask-login";
      version = "0.4.0";
      src = fetchPypiWheel "flask-login" "0.4.0" "Flask_Login-0.4.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "flask-login" "flask_login") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ flask ];
    };
    "flask-openid" = override python-super.flask-openid ( oldAttrs: {
      pname = "flask-openid";
      version = "1.2.5";
      passthru = (get_passthru python-super "flask-openid" "flask-openid") // { provider = "nixpkgs"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
    });
    "flask-sqlalchemy" = python-self.buildPythonPackage {
      pname = "flask-sqlalchemy";
      version = "2.4.4";
      src = fetchPypiWheel "flask-sqlalchemy" "2.4.4" "Flask_SQLAlchemy-2.4.4-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "flask-sqlalchemy" "flask_sqlalchemy") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ flask sqlalchemy ];
    };
    "flask-swagger" = override python-super.flask-swagger ( oldAttrs: {
      pname = "flask-swagger";
      version = "0.2.14";
      passthru = (get_passthru python-super "flask-swagger" "flask-swagger") // { provider = "nixpkgs"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
    });
    "flask-wtf" = python-self.buildPythonPackage {
      pname = "flask-wtf";
      version = "0.14.3";
      src = fetchPypiWheel "flask-wtf" "0.14.3" "Flask_WTF-0.14.3-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "flask-wtf" "flask_wtf") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ flask itsdangerous wtforms ];
    };
    "funcsigs" = python-self.buildPythonPackage {
      pname = "funcsigs";
      version = "1.0.2";
      src = fetchPypiWheel "funcsigs" "1.0.2" "funcsigs-1.0.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "funcsigs" "funcsigs") // { provider = "wheel"; };
    };
    "future" = override python-super.future ( oldAttrs: {
      pname = "future";
      version = "0.18.2";
      passthru = (get_passthru python-super "future" "future") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
      src = fetchPypi "future" "0.18.2";
    });
    "gitdb" = python-self.buildPythonPackage {
      pname = "gitdb";
      version = "4.0.5";
      src = fetchPypiWheel "gitdb" "4.0.5" "gitdb-4.0.5-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "gitdb" "gitdb") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ smmap ];
    };
    "gitpython" = python-self.buildPythonPackage {
      pname = "gitpython";
      version = "3.1.9";
      src = fetchPypiWheel "gitpython" "3.1.9" "GitPython-3.1.9-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "gitpython" "GitPython") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ gitdb ];
    };
    "graphviz" = python-self.buildPythonPackage {
      pname = "graphviz";
      version = "0.14.2";
      src = fetchPypiWheel "graphviz" "0.14.2" "graphviz-0.14.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "graphviz" "graphviz") // { provider = "wheel"; };
    };
    "gunicorn" = python-self.buildPythonPackage {
      pname = "gunicorn";
      version = "19.5.0";
      src = fetchPypiWheel "gunicorn" "19.5.0" "gunicorn-19.5.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "gunicorn" "gunicorn") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ setuptools ];
    };
    "idna" = python-self.buildPythonPackage {
      pname = "idna";
      version = "2.10";
      src = fetchPypiWheel "idna" "2.10" "idna-2.10-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "idna" "idna") // { provider = "wheel"; };
    };
    "importlib-metadata" = python-self.buildPythonPackage {
      pname = "importlib-metadata";
      version = "2.0.0";
      src = fetchPypiWheel "importlib-metadata" "2.0.0" "importlib_metadata-2.0.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "importlib-metadata" "importlib-metadata") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ zipp ];
    };
    "inflection" = python-self.buildPythonPackage {
      pname = "inflection";
      version = "0.5.1";
      src = fetchPypiWheel "inflection" "0.5.1" "inflection-0.5.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "inflection" "inflection") // { provider = "wheel"; };
    };
    "iso8601" = python-self.buildPythonPackage {
      pname = "iso8601";
      version = "0.1.13";
      src = fetchPypiWheel "iso8601" "0.1.13" "iso8601-0.1.13-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "iso8601" "iso8601") // { provider = "wheel"; };
    };
    "itsdangerous" = python-self.buildPythonPackage {
      pname = "itsdangerous";
      version = "1.1.0";
      src = fetchPypiWheel "itsdangerous" "1.1.0" "itsdangerous-1.1.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "itsdangerous" "itsdangerous") // { provider = "wheel"; };
    };
    "jinja2" = python-self.buildPythonPackage {
      pname = "jinja2";
      version = "2.11.2";
      src = fetchPypiWheel "jinja2" "2.11.2" "Jinja2-2.11.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "jinja2" "jinja2") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ markupsafe ];
    };
    "json-merge-patch" = override python-super.json-merge-patch ( oldAttrs: {
      pname = "json-merge-patch";
      version = "0.2";
      passthru = (get_passthru python-super "json-merge-patch" "json-merge-patch") // { provider = "nixpkgs"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
    });
    "jsonschema" = python-self.buildPythonPackage {
      pname = "jsonschema";
      version = "3.2.0";
      src = fetchPypiWheel "jsonschema" "3.2.0" "jsonschema-3.2.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "jsonschema" "jsonschema") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ attrs importlib-metadata pyrsistent setuptools six ];
    };
    "lazy-object-proxy" = python-self.buildPythonPackage {
      pname = "lazy-object-proxy";
      version = "1.5.1";
      src = fetchPypiWheel "lazy-object-proxy" "1.5.1" "lazy_object_proxy-1.5.1-cp37-cp37m-manylinux1_x86_64.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "lazy-object-proxy" "lazy-object-proxy") // { provider = "wheel"; };
      nativeBuildInputs = [ autoPatchelfHook ];
      autoPatchelfIgnoreNotFound = true;
      propagatedBuildInputs = with python-self; manylinux1 ++ [  ];
    };
    "ldap3" = python-self.buildPythonPackage {
      pname = "ldap3";
      version = "2.8.1";
      src = fetchPypiWheel "ldap3" "2.8.1" "ldap3-2.8.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "ldap3" "ldap3") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ pyasn1 ];
    };
    "lockfile" = python-self.buildPythonPackage {
      pname = "lockfile";
      version = "0.12.2";
      src = fetchPypiWheel "lockfile" "0.12.2" "lockfile-0.12.2-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "lockfile" "lockfile") // { provider = "wheel"; };
    };
    "lxml" = python-self.buildPythonPackage {
      pname = "lxml";
      version = "4.5.2";
      src = fetchPypiWheel "lxml" "4.5.2" "lxml-4.5.2-cp37-cp37m-manylinux1_x86_64.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "lxml" "lxml") // { provider = "wheel"; };
      nativeBuildInputs = [ autoPatchelfHook ];
      autoPatchelfIgnoreNotFound = true;
      propagatedBuildInputs = with python-self; manylinux1 ++ [  ];
    };
    "mako" = python-self.buildPythonPackage {
      pname = "mako";
      version = "1.1.3";
      src = fetchPypiWheel "mako" "1.1.3" "Mako-1.1.3-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "mako" "Mako") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ markupsafe ];
    };
    "markdown" = python-self.buildPythonPackage {
      pname = "markdown";
      version = "2.6.11";
      src = fetchPypiWheel "markdown" "2.6.11" "Markdown-2.6.11-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "markdown" "markdown") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ importlib-metadata ];
    };
    "markupsafe" = python-self.buildPythonPackage {
      pname = "markupsafe";
      version = "1.1.1";
      src = fetchPypiWheel "markupsafe" "1.1.1" "MarkupSafe-1.1.1-cp37-cp37m-manylinux1_x86_64.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "markupsafe" "markupsafe") // { provider = "wheel"; };
      nativeBuildInputs = [ autoPatchelfHook ];
      autoPatchelfIgnoreNotFound = true;
      propagatedBuildInputs = with python-self; manylinux1 ++ [  ];
    };
    "marshmallow" = python-self.buildPythonPackage {
      pname = "marshmallow";
      version = "3.8.0";
      src = fetchPypiWheel "marshmallow" "3.8.0" "marshmallow-3.8.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "marshmallow" "marshmallow") // { provider = "wheel"; };
    };
    "marshmallow-enum" = python-self.buildPythonPackage {
      pname = "marshmallow-enum";
      version = "1.5.1";
      src = fetchPypiWheel "marshmallow-enum" "1.5.1" "marshmallow_enum-1.5.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "marshmallow-enum" "marshmallow-enum") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ marshmallow ];
    };
    "marshmallow-oneofschema" = python-self.buildPythonPackage {
      pname = "marshmallow-oneofschema";
      version = "2.1.0";
      src = fetchPypiWheel "marshmallow-oneofschema" "2.1.0" "marshmallow_oneofschema-2.1.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "marshmallow-oneofschema" "marshmallow-oneofschema") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ marshmallow ];
    };
    "marshmallow-sqlalchemy" = python-self.buildPythonPackage {
      pname = "marshmallow-sqlalchemy";
      version = "0.23.1";
      src = fetchPypiWheel "marshmallow-sqlalchemy" "0.23.1" "marshmallow_sqlalchemy-0.23.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "marshmallow-sqlalchemy" "marshmallow-sqlalchemy") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ marshmallow sqlalchemy ];
    };
    "moreorless" = python-self.buildPythonPackage {
      pname = "moreorless";
      version = "0.3.0";
      src = fetchPypiWheel "moreorless" "0.3.0" "moreorless-0.3.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "moreorless" "moreorless") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ click parameterized volatile ];
    };
    "natsort" = python-self.buildPythonPackage {
      pname = "natsort";
      version = "7.0.1";
      src = fetchPypiWheel "natsort" "7.0.1" "natsort-7.0.1-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "natsort" "natsort") // { provider = "wheel"; };
    };
    "numpy" = python-self.buildPythonPackage {
      pname = "numpy";
      version = "1.19.2";
      src = fetchPypiWheel "numpy" "1.19.2" "numpy-1.19.2-cp37-cp37m-manylinux2010_x86_64.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "numpy" "numpy") // { provider = "wheel"; };
      nativeBuildInputs = [ autoPatchelfHook ];
      autoPatchelfIgnoreNotFound = true;
      propagatedBuildInputs = with python-self; manylinux1 ++ [  ];
    };
    "openapi-spec-validator" = python-self.buildPythonPackage {
      pname = "openapi-spec-validator";
      version = "0.2.9";
      src = fetchPypiWheel "openapi-spec-validator" "0.2.9" "openapi_spec_validator-0.2.9-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "openapi-spec-validator" "openapi-spec-validator") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ jsonschema pyyaml six ];
    };
    "pandas" = python-self.buildPythonPackage {
      pname = "pandas";
      version = "1.1.3";
      src = fetchPypiWheel "pandas" "1.1.3" "pandas-1.1.3-cp37-cp37m-manylinux1_x86_64.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "pandas" "pandas") // { provider = "wheel"; };
      nativeBuildInputs = [ autoPatchelfHook ];
      autoPatchelfIgnoreNotFound = true;
      propagatedBuildInputs = with python-self; manylinux1 ++ [ numpy python-dateutil pytz ];
    };
    "parameterized" = python-self.buildPythonPackage {
      pname = "parameterized";
      version = "0.7.4";
      src = fetchPypiWheel "parameterized" "0.7.4" "parameterized-0.7.4-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "parameterized" "parameterized") // { provider = "wheel"; };
    };
    "pendulum" = python-self.buildPythonPackage {
      pname = "pendulum";
      version = "2.1.2";
      src = fetchPypiWheel "pendulum" "2.1.2" "pendulum-2.1.2-cp37-cp37m-manylinux1_x86_64.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "pendulum" "pendulum") // { provider = "wheel"; };
      nativeBuildInputs = [ autoPatchelfHook ];
      autoPatchelfIgnoreNotFound = true;
      propagatedBuildInputs = with python-self; manylinux1 ++ [ python-dateutil pytzdata ];
    };
    "prison" = python-self.buildPythonPackage {
      pname = "prison";
      version = "0.1.3";
      src = fetchPypiWheel "prison" "0.1.3" "prison-0.1.3-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "prison" "prison") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ six ];
    };
    "psutil" = override python-super.psutil ( oldAttrs: {
      pname = "psutil";
      version = "5.7.2";
      passthru = (get_passthru python-super "psutil" "psutil") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
      src = fetchPypi "psutil" "5.7.2";
    });
    "pyasn1" = python-self.buildPythonPackage {
      pname = "pyasn1";
      version = "0.4.8";
      src = fetchPypiWheel "pyasn1" "0.4.8" "pyasn1-0.4.8-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "pyasn1" "pyasn1") // { provider = "wheel"; };
    };
    "pycparser" = python-self.buildPythonPackage {
      pname = "pycparser";
      version = "2.20";
      src = fetchPypiWheel "pycparser" "2.20" "pycparser-2.20-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "pycparser" "pycparser") // { provider = "wheel"; };
    };
    "pygments" = python-self.buildPythonPackage {
      pname = "pygments";
      version = "2.7.1";
      src = fetchPypiWheel "pygments" "2.7.1" "Pygments-2.7.1-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "pygments" "pygments") // { provider = "wheel"; };
    };
    "pyjwt" = python-self.buildPythonPackage {
      pname = "pyjwt";
      version = "1.7.1";
      src = fetchPypiWheel "pyjwt" "1.7.1" "PyJWT-1.7.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "pyjwt" "pyjwt") // { provider = "wheel"; };
    };
    "pyrsistent" = override python-super.pyrsistent ( oldAttrs: {
      pname = "pyrsistent";
      version = "0.17.3";
      passthru = (get_passthru python-super "pyrsistent" "pyrsistent") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
      src = fetchPypi "pyrsistent" "0.17.3";
    });
    "python-daemon" = python-self.buildPythonPackage {
      pname = "python-daemon";
      version = "2.2.4";
      src = fetchPypiWheel "python-daemon" "2.2.4" "python_daemon-2.2.4-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "python-daemon" "python-daemon") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ docutils lockfile setuptools ];
    };
    "python-dateutil" = python-self.buildPythonPackage {
      pname = "python-dateutil";
      version = "2.8.1";
      src = fetchPypiWheel "python-dateutil" "2.8.1" "python_dateutil-2.8.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "python-dateutil" "dateutil") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ six ];
    };
    "python-editor" = python-self.buildPythonPackage {
      pname = "python-editor";
      version = "1.0.4";
      src = fetchPypiWheel "python-editor" "1.0.4" "python_editor-1.0.4-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "python-editor" "python-editor") // { provider = "wheel"; };
    };
    "python-slugify" = python-self.buildPythonPackage {
      pname = "python-slugify";
      version = "4.0.1";
      src = fetchPypi "python-slugify" "4.0.1";
      dontStrip = true;
      passthru = (get_passthru python-super "python-slugify" "python-slugify") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ unidecode text-unidecode ];
    };
    "pytz" = python-self.buildPythonPackage {
      pname = "pytz";
      version = "2020.1";
      src = fetchPypiWheel "pytz" "2020.1" "pytz-2020.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "pytz" "pytz") // { provider = "wheel"; };
    };
    "pytzdata" = python-self.buildPythonPackage {
      pname = "pytzdata";
      version = "2020.1";
      src = fetchPypiWheel "pytzdata" "2020.1" "pytzdata-2020.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "pytzdata" "pytzdata") // { provider = "wheel"; };
    };
    "pyyaml" = override python-super.pyyaml ( oldAttrs: {
      pname = "pyyaml";
      version = "5.3.1";
      passthru = (get_passthru python-super "pyyaml" "pyyaml") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
      src = fetchPypi "pyyaml" "5.3.1";
    });
    "requests" = python-self.buildPythonPackage {
      pname = "requests";
      version = "2.24.0";
      src = fetchPypiWheel "requests" "2.24.0" "requests-2.24.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "requests" "requests") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ certifi chardet idna urllib3 ];
    };
    "setproctitle" = override python-super.setproctitle ( oldAttrs: {
      pname = "setproctitle";
      version = "1.1.10";
      passthru = (get_passthru python-super "setproctitle" "setproctitle") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
      src = fetchPypi "setproctitle" "1.1.10";
    });
    "setuptools" = override python-super.setuptools ( oldAttrs: {
      pname = "setuptools";
      version = "47.3.1";
      passthru = (get_passthru python-super "setuptools" "setuptools") // { provider = "nixpkgs"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
    });
    "six" = python-self.buildPythonPackage {
      pname = "six";
      version = "1.15.0";
      src = fetchPypiWheel "six" "1.15.0" "six-1.15.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "six" "six") // { provider = "wheel"; };
    };
    "smmap" = python-self.buildPythonPackage {
      pname = "smmap";
      version = "3.0.4";
      src = fetchPypiWheel "smmap" "3.0.4" "smmap-3.0.4-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "smmap" "smmap") // { provider = "wheel"; };
    };
    "sqlalchemy" = python-self.buildPythonPackage {
      pname = "sqlalchemy";
      version = "1.3.20";
      src = fetchPypiWheel "sqlalchemy" "1.3.20" "SQLAlchemy-1.3.20-cp37-cp37m-manylinux2010_x86_64.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "sqlalchemy" "sqlalchemy") // { provider = "wheel"; };
      nativeBuildInputs = [ autoPatchelfHook ];
      autoPatchelfIgnoreNotFound = true;
      propagatedBuildInputs = with python-self; manylinux1 ++ [  ];
    };
    "sqlalchemy-jsonfield" = python-self.buildPythonPackage {
      pname = "sqlalchemy-jsonfield";
      version = "0.9.0";
      src = fetchPypiWheel "sqlalchemy-jsonfield" "0.9.0" "SQLAlchemy_JSONField-0.9.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "sqlalchemy-jsonfield" "sqlalchemy-jsonfield") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ sqlalchemy ];
    };
    "sqlalchemy-utils" = override python-super.sqlalchemy-utils ( oldAttrs: {
      pname = "sqlalchemy-utils";
      version = "0.36.6";
      passthru = (get_passthru python-super "sqlalchemy-utils" "sqlalchemy-utils") // { provider = "nixpkgs"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
    });
    "swagger-ui-bundle" = python-self.buildPythonPackage {
      pname = "swagger-ui-bundle";
      version = "0.0.8";
      src = fetchPypiWheel "swagger-ui-bundle" "0.0.8" "swagger_ui_bundle-0.0.8-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "swagger-ui-bundle" "swagger-ui-bundle") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ jinja2 ];
    };
    "tabulate" = python-self.buildPythonPackage {
      pname = "tabulate";
      version = "0.8.7";
      src = fetchPypiWheel "tabulate" "0.8.7" "tabulate-0.8.7-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "tabulate" "tabulate") // { provider = "wheel"; };
    };
    "tenacity" = python-self.buildPythonPackage {
      pname = "tenacity";
      version = "6.2.0";
      src = fetchPypiWheel "tenacity" "6.2.0" "tenacity-6.2.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "tenacity" "tenacity") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ six ];
    };
    "termcolor" = override python-super.termcolor ( oldAttrs: {
      pname = "termcolor";
      version = "1.1.0";
      passthru = (get_passthru python-super "termcolor" "termcolor") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
      src = fetchPypi "termcolor" "1.1.0";
    });
    "text-unidecode" = python-self.buildPythonPackage {
      pname = "text-unidecode";
      version = "1.3";
      src = fetchPypiWheel "text-unidecode" "1.3" "text_unidecode-1.3-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "text-unidecode" "text-unidecode") // { provider = "wheel"; };
    };
    "thrift" = override python-super.thrift ( oldAttrs: {
      pname = "thrift";
      version = "0.13.0";
      passthru = (get_passthru python-super "thrift" "thrift") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [ six ];
      src = fetchPypi "thrift" "0.13.0";
    });
    "typing-extensions" = python-self.buildPythonPackage {
      pname = "typing-extensions";
      version = "3.7.4.3";
      src = fetchPypiWheel "typing-extensions" "3.7.4.3" "typing_extensions-3.7.4.3-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "typing-extensions" "typing-extensions") // { provider = "wheel"; };
    };
    "tzlocal" = python-self.buildPythonPackage {
      pname = "tzlocal";
      version = "2.1";
      src = fetchPypiWheel "tzlocal" "2.1" "tzlocal-2.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "tzlocal" "tzlocal") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ pytz ];
    };
    "unicodecsv" = override python-super.unicodecsv ( oldAttrs: {
      pname = "unicodecsv";
      version = "0.14.1";
      passthru = (get_passthru python-super "unicodecsv" "unicodecsv") // { provider = "sdist"; };
      buildInputs = with python-self; (replace_deps oldAttrs "buildInputs" self) ++ [  ];
      propagatedBuildInputs = with python-self; (replace_deps oldAttrs "propagatedBuildInputs" self) ++ [  ];
      src = fetchPypi "unicodecsv" "0.14.1";
    });
    "unidecode" = python-self.buildPythonPackage {
      pname = "unidecode";
      version = "1.1.1";
      src = fetchPypiWheel "unidecode" "1.1.1" "Unidecode-1.1.1-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "unidecode" "unidecode") // { provider = "wheel"; };
    };
    "urllib3" = python-self.buildPythonPackage {
      pname = "urllib3";
      version = "1.25.10";
      src = fetchPypiWheel "urllib3" "1.25.10" "urllib3-1.25.10-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "urllib3" "urllib3") // { provider = "wheel"; };
    };
    "volatile" = python-self.buildPythonPackage {
      pname = "volatile";
      version = "2.1.0";
      src = fetchPypi "volatile" "2.1.0";
      passthru = (get_passthru python-super "volatile" "volatile") // { provider = "sdist"; };
    };
    "werkzeug" = python-self.buildPythonPackage {
      pname = "werkzeug";
      version = "1.0.1";
      src = pkgs.fetchurl {
        url = "https://github.com/pallets/werkzeug/archive/ad3ac7322144c0b1779618f98b2176b59cf2789a.tar.gz";
        sha256 = "sha256-9IP8obrSYIwLrJ7nhyGsVN5OgJCsEPpi/Avbl9z5Oyw=";
      };
      doCheck = false;
      propagatedBuildInputs = with python-self; [ bowler docutils ];
      postPatch = ''
          substituteInPlace src/werkzeug/wrappers/base_response.py \
                  --replace  "samesite=samesite" "samesite=None"
        '';
    };

    "wtforms" = python-self.buildPythonPackage {
      pname = "wtforms";
      version = "2.3.3";
      src = fetchPypiWheel "wtforms" "2.3.3" "WTForms-2.3.3-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "wtforms" "wtforms") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ markupsafe ];
    };
    "zipp" = python-self.buildPythonPackage {
      pname = "zipp";
      version = "3.3.0";
      src = fetchPypiWheel "zipp" "3.3.0" "zipp-3.3.0-py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "zipp" "zipp") // { provider = "wheel"; };
    };
    "zope.deprecation" = python-self.buildPythonPackage {
      pname = "zope.deprecation";
      version = "4.4.0";
      src = fetchPypiWheel "zope.deprecation" "4.4.0" "zope.deprecation-4.4.0-py2.py3-none-any.whl";
      format = "wheel";
      dontStrip = true;
      passthru = (get_passthru python-super "zope.deprecation" "zope_deprecation") // { provider = "wheel"; };
      propagatedBuildInputs = with python-self; [ setuptools ];
    };
  }; in self);
in
{ inherit overrides select_pkgs; }
