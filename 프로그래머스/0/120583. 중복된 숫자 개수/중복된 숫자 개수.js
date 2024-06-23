// function solution(array, n) {
//     let count = 0;
//     array.forEach(item => {
//         if (item ===n) count++;
//     })    
//     return count;
// }

function solution (array, n) {
    return array.filter(item => item === n).length;
}