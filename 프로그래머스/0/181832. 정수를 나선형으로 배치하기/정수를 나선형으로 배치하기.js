function solution(n) {
    const arr = Array.from({length : n}, () => Array(n).fill(0));
    console.log('arr:',arr)
    
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    let dir = 0;
    let x = 0, y = 0;
    
    let num = 1;
    while (num <= n*n) {
        arr[x][y] = num++; 
        let nx = x + dx[dir];
        let ny = y + dy[dir];
        
        if(nx < 0 || ny < 0 || nx >= n || ny >= n || arr[nx][ny] !== 0) {
            dir = (dir + 1) % 4;
            nx = x + dx[dir];
            ny = y + dy[dir];
        }
        x = nx;
        y = ny;
    }
    return arr;
}