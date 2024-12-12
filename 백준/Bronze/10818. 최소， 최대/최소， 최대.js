const readline = require("readline");

let numbers = [];
let rl;
let N;

function readlineModule() {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function startReadline() {
  readlineModule();

  rl.on("line", (line) => {
    if (N === undefined) {
      N = parseInt(line, 10);
    } else {
      numbers = line.split(" ").map(Number);

      const { min, max } = findMinMax(numbers);

      console.log(min, max);

      rl.close();
    }
  });
}

function findMinMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}

startReadline();

module.exports = { findMinMax, startReadline };