function solution(n) {
    let sqrt = Math.sqrt(n);
    
    if (Number.isInteger(sqrt) && sqrt * sqrt === n) return 1;
    else return 2;
}