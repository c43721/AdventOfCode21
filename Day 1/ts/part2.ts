const text = await Deno.readTextFile("./input.txt");

const numbers = text.split("\n").map((n: string) => parseInt(n, 10));

let count = 0;

const sums = [];

for (let i = 0; i < numbers.length - 1; i++) {
  const [i1, i2, i3] = [numbers[i], numbers[i + 1], numbers[i + 2]];

  sums.push(i1 + i2 + i3);
}

for (let i = 0; i < sums.length - 1; i++) {
  if (sums[i] < sums[i + 1]) {
    count++;
  }
}

console.log(count);
