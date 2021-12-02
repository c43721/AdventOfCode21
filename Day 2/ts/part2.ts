const text = await Deno.readTextFile("./input.txt");

type CommandType = "forward" | "up" | "down";
type Command = `${CommandType} ${string}`;

const commands = text.split("\n") as Command[];

const position = { horizonal: 0, depth: 0, aim: 0 };

commands.forEach((cmd) => mapCommandToPosition(cmd));

function mapCommandToPosition(command: Command) {
  const [direction, amount] = command.split(" ");

  // need me some js pattern matching rn
  switch (direction as CommandType) {
    case "up": {
      position.aim -= Number(amount);
      break;
    }
    case "down": {
      position.aim += Number(amount);
      break;
    }
    case "forward": {
      const amt = Number(amount);

      position.horizonal += amt;
      position.depth += position.aim * amt;
      break;
    }
  }
}

console.log(
  `Horizontal: ${position.horizonal}\tDepth: ${position.depth}\tAim: ${
    position.aim
  }\n\tTotal: ${position.depth * position.horizonal}`
);
