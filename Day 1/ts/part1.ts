const text = await Deno.readTextFile("./input.txt");

const numbers = text.split("\n").map((n) => parseInt(n, 10));

let count = 0;

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] < numbers[i + 1]) {
    count++;
  }
}

console.log(count);
