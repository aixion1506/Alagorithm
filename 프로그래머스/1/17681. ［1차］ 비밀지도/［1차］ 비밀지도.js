function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < n; i++) {
        const line = (arr1[i] | arr2[i])
        .toString(2)
        .padStart(n, '0')
        .replace(/1/g, '#')
        .replace(/0/g, ' ');
        answer.push(line);
    }
    return answer;
}

const map1 = [9, 20, 28, 18, 11];
const map2 = [30, 1, 21, 17, 28];
console.log(solution(5, map1, map2));