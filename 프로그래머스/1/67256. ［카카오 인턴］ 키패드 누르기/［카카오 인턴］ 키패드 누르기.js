const positions = {
  1: [0, 0], 2: [0, 1], 3: [0, 2],
  4: [1, 0], 5: [1, 1], 6: [1, 2],
  7: [2, 0], 8: [2, 1], 9: [2, 2],
  '*': [3, 0], 0: [3, 1], '#': [3, 2]
};

function solution(numbers, hand) {
   let left = "*";
  let right = "#";
  let result = "";

  for (let num of numbers) {
    // 왼손
    if ([1, 4, 7].includes(num)) {
      result += "L";
      left = num;
    } // 오른손
    else if ([3, 6, 9].includes(num)) {
      result += "R";
      right = num;
    } // 가운데
    else {
      let [lx, ly] = positions[left];
      let [rx, ry] = positions[right];
      let [nx, ny] = positions[num];

      let lDist = Math.abs(lx - nx) + Math.abs(ly - ny);
      let rDist = Math.abs(rx - nx) + Math.abs(ry - ny);

      // 왼손 거리가 더 짧으면 왼손으로 눌림
      if (lDist < rDist) {
        result += "L";
        left = num;
      }
      // 오른손 거리가 더 짧으면 오른손으로 눌림
      else if (rDist < lDist) {
        result += "R";
        right = num;
      }
      // 거리가 같으면 주어진 손으로 눌림
      else {
        if (hand === "left") {
          result += "L";
          left = num;
        } else {
          result += "R";
          right = num;
        }
      }
    }
  }
  return result;
    
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));