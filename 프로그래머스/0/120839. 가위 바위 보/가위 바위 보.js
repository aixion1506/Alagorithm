function solution(rsp) {
     let result ='';
    
    let winRule = {
        '5':'2',
        '2':'0',
        '0':'5'
    };
    
    for (let i = 0; i < rsp.length; i++) {
        result += winRule[rsp[i]];
    }
    
    return result;
}