function solution(my_string) {
    let result = '';
    
    for (let i = 0; i < my_string.length; i++) {
        let char = my_string[i];
        
        if (char >= 'a' && char <= 'z') result += char.toUpperCase();
        else result += char.toLowerCase();
    }
    return result;
}