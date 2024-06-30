function solution(x) {
    const digits = String(x).split('');   // 정수x를 문자열로 취급후 한글자씩 분리
  const digitSum = digits.reduce((sum, digit) => sum + Number(digit), 0);
  // 초기값 sum은 0, digit은 digits를 하나씩 대입 -> 자리수를 다 더해서 sum으로 반환
  return x % digitSum === 0;
  // 인자 x가 digitsum으로 나눌때 나머지 0인지 true 체크
}