const text = await Deno.readTextFile("./input.txt");

type CommandType = "forward" | "up" | "down";
type Command = `${CommandType} ${string}`;

const commands = text.split('\n') as any as Command[];

const position = { horizonal: 0, depth: 0 };

commands.forEach((cmd) => mapCommandToPosition(cmd));

function mapCommandToPosition(command: Command) {
  const [direction, amount] = command.split(" ");

  // need me some js pattern matching rn
  switch (direction as CommandType) {
    case "up": {
      position.depth -= Number(amount);
      break;
    }
    case "down": {
      position.depth += Number(amount);
      break;
    }
    case "forward": {
      position.horizonal += Number(amount);
      break;
    }
  }
}

console.log(
  `Horizontal: ${position.horizonal}\tDepth: ${position.depth}\n\tTotal: ${
    position.depth * position.horizonal
  }`
);
