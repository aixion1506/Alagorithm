const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const result = line
    .split(" ")
    .map(Number)
    .reduce((acc, num) => acc + num, 0);

  console.log(result);

  rl.close();
});