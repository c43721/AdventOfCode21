const text = await Deno.readTextFile("./input.txt");

const numbers: number[] = text.split("\n").map((n) => parseInt(n, 2));

let mask = 0b100000000000;

let ones = 0;
let zeros = 0;

let gammaBits = [];
let epsilonBits = [];

for (let i = 0; i < 12; i++) {
  numbers.forEach((n) => {
    let test = n & mask;
    test === 0 ? (zeros += 1) : (ones += 1);
  });

  if (ones > zeros) {
    gammaBits.push(1);
    epsilonBits.push(0);
  } else {
    gammaBits.push(0);
    epsilonBits.push(1);
  }

  ones = 0;
  zeros = 0;

  console.log(mask.toString(2))
  mask >>= 1;
}

const gamma = parseInt(gammaBits.join(""), 2);
const epsilon = parseInt(epsilonBits.join(""), 2);

console.log(`Gamma: ${gammaBits.join("")}\tEpsilon: ${epsilonBits.join("")}\tTotal: ${epsilon * gamma}`);
