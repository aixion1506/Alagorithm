function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  const scores = [0, 0, 0];

  // 정답 배열을 하나씩 확인하면서
  answers.forEach((answer, i) => {
    // 세 명의 수포자 각각의 패턴과 비교
    patterns.forEach((patterns, idx) => {
      // 수포자의 패턴 길이를 넘어가면 처음으로 돌아가도록 % 연산 사용
      // 수포자가 i번째 문제에서 찍은 답과 실제 정답이 같은지 확인
      if (answer === patterns[i % patterns.length]) {
        // 정답이면 점수 1점 추가
        scores[idx]++;
      }
    });
  });

  const maxScore = Math.max(...scores);

  const result = [];

  // 점수가 maxScore인 사람의 번호(idx + 1)를 결과 배열에 추가
  scores.forEach((score, idx) => {
    if (score === maxScore) {
      result.push(idx + 1); 
    }
  });

  return result;
}