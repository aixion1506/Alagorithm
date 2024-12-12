const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let N; // 정수의 개수

// 첫 번째 줄에서 정수의 개수 N을 읽습니다.
rl.on("line", (line) => {
  if (N === undefined) {
    N = parseInt(line, 10); // 정수의 개수를 정수로 변환
  } else {
    inputLines = line.split(" ").map(Number); // N개의 정수를 숫자로 변환
    const { min, max } = findMinMax(inputLines); // 최솟값과 최댓값 계산
    console.log(min, max); // 결과 출력
    rl.close(); // 입력 스트림 닫기
  }
});

// 최솟값과 최댓값을 계산하는 함수
function findMinMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}