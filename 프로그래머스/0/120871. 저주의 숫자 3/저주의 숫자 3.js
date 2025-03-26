function solution(n) {
    let num = 1;
    let count = 0;
    
    while (count < n) {
        if (num % 3 !== 0 && !String(num).includes('3')) count++;
        num++;
    }
    return num - 1;
}