const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let T;

// 첫 번째 줄에서 테스트 케이스의 개수 T를 읽습니다.
rl.on("line", (line) => {
  if (T === undefined) {
    T = parseInt(line);
  } else {
    inputLines.push(line);
    if (inputLines.length === T) {
      // 모든 입력을 받았으면, 결과를 계산하고 출력합니다.
      const results = inputLines.map((line) => {
        const [A, B] = line.split(" ").map(Number);
        return A + B;
      });
      console.log(results.join("\n")); // 결과를 한 번에 출력합니다.
      rl.close(); // 입력 스트림을 닫습니다.
    }
  }
});