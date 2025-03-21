function solution(lottos, win_nums) {
    const zeroCount = lottos.filter(num => num === 0).length;
    const matchCount = lottos.filter(num => win_nums.includes(num)).length;
    
    const bestRank = getRank(matchCount + zeroCount);
    const worstRank = getRank(matchCount);
    
    return [bestRank, worstRank]
}

const getRank = (count) => {
    return count >= 2? 7-count : 6
}