function solution(money) {
    const price = 5500;
    const maxI = Math.floor(money / price);
    const penny = money % price;

    return [maxI, penny];
}