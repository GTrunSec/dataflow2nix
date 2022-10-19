{
  inputs,
  cell,
}: let
  cmd = type: text: {
    command = {inherit type text;};
  };
in {
  go = cmd "shell" "go mod tidy -v";
}
