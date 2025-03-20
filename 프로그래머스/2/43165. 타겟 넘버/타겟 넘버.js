let numbers, target;  // 안전한 초기화

function dfs(index, sum) {
    if (index === numbers.length) {
        return sum === target ? 1 : 0;
    }

    return dfs(index + 1, sum + numbers[index]) +
           dfs(index + 1, sum - numbers[index]);
}

function solution(nums, tgt) {
    numbers = nums;  // 전역 변수에 값 할당
    target = tgt;    // 전역 변수에 값 할당
    return dfs(0, 0);
}

// 테스트 실행
console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2