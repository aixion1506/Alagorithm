function solution(n, k) {
    const serviceDrinks = Math.floor(n/10);
    const result = (n * 12000) + (k - serviceDrinks) * 2000;
    console.log(result)
    return result;
    
}