{
  inputs,
  cell,
}: let
  inherit (inputs) std std-data-collection;
in {
  mdbook = std-data-collection.data.configs.mdbook {
    data = {
      book.title = "dataflow2nix";
    };
  };

  treefmt = std-data-collection.data.configs.treefmt {
    data.formatter.nix = {
      excludes = [
        "generated.nix"
      ];
    };
    data.formatter.prettier = {
      excludes = [
        "generated.json"
      ];
    };
  };
}
