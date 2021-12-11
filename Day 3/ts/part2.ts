const text = await Deno.readTextFile("./input.txt");

const numbers: number[] = text.split("\n").map((n) => parseInt(n, 2));

// let mask = 0b100000000000;
let mask = 0b10000;

let oxygen: number[] = [];
let co2: number[] = [];

let oxygenNum = 0;
let co2Num = 0;

let ones = 0;
let zeros = 0;

numbers.forEach((n) => {
  let significantBit = n & mask;
  let bit = significantBit === 0 ? 1 : 0;

  if (bit === 0) zeros += 1;
  else ones += 1;
});

if (ones > zeros) {
  // more 1s
  // filter those which are set to 1
  oxygen.push(...numbers.filter((num) => (num & mask) === mask));
} else if (ones === zeros) {
  // equal, mirror above
  oxygen.push(...numbers.filter((num) => (num & mask) === mask));
} else {
  // more 0s
  oxygen.push(...numbers.filter((num) => (num & mask) === 0));
}

console.log(oxygen.length)
mask >>= 1;

for (let i = 0; i < 5; i++) {
  if (oxygen.length === 1) break;
  console.log(oxygen.length)

  oxygen.forEach((n) => {
    let significantBit = n & mask;
    let bit = significantBit === 0 ? 1 : 0;

    if (bit === 0) zeros += 1;
    else ones += 1;
  });

  if (ones > zeros) {
    // more 1s
    // filter those which are set to 1
    oxygen = oxygen.filter((num) => (num & mask) === mask);
  } else if (ones === zeros) {
    // equal, mirror above
    oxygen = oxygen.filter((num) => (num & mask) === mask);
  } else {
    // more 0s
    oxygen = oxygen.filter((num) => (num & mask) === 0);
  }

  console.log(oxygen.map((s) => s.toString(2)));

  ones = 0;
  zeros = 0;
  mask >>= 1;
}

console.log(oxygen.map((s) => s.toString(2)));

// oxygenNum = oxygen[0];

// console.log(
//   `Oxygen: ${oxygenNum}\CO2: ${co2Num}\tTotal: ${oxygenNum * co2Num}`
// );
