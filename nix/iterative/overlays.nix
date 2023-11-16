{ inputs, cell }:
{
  iteractive = final: prev: {
    iteractive-sources = prev.callPackage ./packages/_sources/generated.nix { };
    iterative-telemetry =
      prev.python3Packages.callPackage ./packages/iterative-telemetry.nix
        { };
    python3 = prev.python3.override (
      old: {
        packageOverrides =
          prev.lib.composeExtensions (old.packageOverrides or (_: _: { }))
            (
              selfPythonPackages: pythonPackages:
              let
                fetchDvc =
                  name: inputs:
                  pythonPackages."${name}".overridePythonAttrs (
                    old: {
                      inherit (final.iteractive-sources."${name}") src pname version;
                      propagatedBuildInputs = old.propagatedBuildInputs or [ ] ++ inputs;
                    }
                  );
              in
              {
                dvc-objects = fetchDvc "dvc-objects" [ ];
                dvc-render = fetchDvc "dvc-render" [ ];
                dvc-task = fetchDvc "dvc-task" [ ];
                dvc-data = (fetchDvc "dvc-data" [ ]).overridePythonAttrs (
                  old: {
                    postPatch = ''
                      substituteInPlace setup.cfg \
                      --replace "dvc-objects==0.14.0" "dvc-objects>="
                    '';
                  }
                );
                dvclive =
                  (fetchDvc "dvclive" [ pythonPackages.ruamel_yaml ]).overridePythonAttrs
                    (
                      old: {
                        postPatch = ''
                          rm -rf setup.cfg
                        '';
                      }
                    );
                dvc-http = prev.python3Packages.callPackage ./packages/dvc-http.nix { };
              }
            );
      }
    );
    dvc = prev.dvc.overridePythonAttrs (
      old:
      let
        format = prev.formats.toml { };

        pyproject = format.generate "pyproject.toml" readPyproject;
        readPyproject =
          prev.lib.recursiveUpdate
            (builtins.fromTOML (
              builtins.readFile (final.iteractive-sources.dvc.src + "/pyproject.toml")
            ))
            {
              project.description = ''
                Git for data scientists - manage your code and data together
              '';
            };
      in
      {
        format = "pyproject";
        inherit (final.iteractive-sources.dvc-latest) src pname version;

        propagatedBuildInputs =
          old.propagatedBuildInputs
          ++ (
            with final.python3.pkgs; [
              hydra-core
              final.iterative-telemetry
              dvc-http
            ]
          );
        postPatch = ''
          cp -rf ${pyproject} pyproject.toml
          substituteInPlace pyproject.toml \
            --replace "dvc-render==0.0.15" "dvc-render" \
            --replace "iterative-telemetry==0.0.6" "iterative-telemetry" \
            --replace "dvc-http==2.27.2" "dvc-http" \
            --replace "dvc-task==0.1.8" "dvc-task" \
            --replace "dvc-data==0.28.4" "dvc-data" \
            --replace "dvclive>=1.2.2" "dvclive" \
            --replace "scmrepo==0.1.4" "scmrepo" \
            --replace "pathspec>=0.9.0,<0.10.0" "pathspec" \
            --replace "grandalf==0.6" "grandalf"

          substituteInPlace dvc/daemon.py \
                --subst-var-by dvc "$out/bin/dcv"
        '';
      }
    );
  };
}
