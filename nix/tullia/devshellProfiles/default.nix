{ inputs, cell }:
{
  default = {
    commands = [ { package = cell.packages.tullia; } ];
  };
}
