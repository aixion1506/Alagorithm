function solution(sizes) {
    let maxW = 0, maxH = 0;
    
    // sizes.forEach((sizes, i) => {
    //     console.log(`${i+1} / ${sizes}`)
    // });
    
    sizes.forEach(([w,h], i) => {
        const big = Math.max(w,h);
        const small = Math.min(w,h);
        
        if (big > maxW) maxW = big;
        if (small > maxH) maxH = small;
        // console.log(`${i + 1}, 최대 :${big}, 최소: ${small}`)
        
    })
    
    return maxW * maxH;
    
}