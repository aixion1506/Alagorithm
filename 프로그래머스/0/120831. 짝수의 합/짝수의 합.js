function solution(n) {
    let answer = 0;
    let i = 0 ;
    while (i<=n) {
        answer += i;
        i+=2;
    }
    return answer;
}