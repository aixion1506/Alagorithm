function solution(dot) {
    // const pattern = {
    //     1: [-,+]
    // }
    const [xDot, yDot] = dot;
    console.log(xDot, yDot)
    if (xDot >= 0) {
        if (yDot >= 0) return 1;
        else return 4;
    } else {
        if (yDot >= 0) return 2;
        else return 3;
    }
}