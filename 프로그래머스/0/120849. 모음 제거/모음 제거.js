function solution(my_string) {
    const x = ["a", "e", "i", "o", "u"];
    const str = [...my_string];
    const filtering = str.filter(str => !x.includes(str)).join("");
    return filtering
}