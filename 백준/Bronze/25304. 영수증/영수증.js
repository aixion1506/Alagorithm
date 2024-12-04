const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalAmount = 0; // 영수증에 적힌 총 금액
let numberOfItems = 0; // 구매한 물건의 종류 수
let calculatedTotal = 0; // 계산된 총 금액
let inputCount = 0; // 읽은 입력의 개수

rl.on("line", (line) => {
  if (inputCount === 0) {
    totalAmount = parseInt(line, 10); // 첫 줄에서 총 금액을 읽음
  } else if (inputCount === 1) {
    numberOfItems = parseInt(line, 10); // 두 번째 줄에서 물건 종류 수를 읽음
  } else {
    // 각 물건의 가격과 개수를 읽음
    const [price, quantity] = line.split(" ").map(Number);
    calculatedTotal += price * quantity; // 총 금액을 계산
  }
  
  inputCount++; // 읽은 입력의 개수를 증가시킴

  // 모든 입력을 다 받았을 때
  if (inputCount === numberOfItems + 2) {
    // numberOfItems + 2: 첫 번째 줄과 두 번째 줄을 포함하므로
    if (calculatedTotal === totalAmount) {
      console.log("Yes");
    } else {
      console.log("No");
    }
    rl.close(); // 입력 스트림을 닫음
  }
});

// 'close' 이벤트 리스너를 추가하여 프로세스를 종료합니다.
rl.on("close", () => {
  process.exit(0);
});
