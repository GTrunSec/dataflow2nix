{
  inputs,
  cell,
}: let
  inherit (inputs) std;
in {
  # mdbook = std-data-collection.data.configs.mdbook {
  #   data = {
  #     book.title = "dataflow2nix";
  #   };
  # };
}
