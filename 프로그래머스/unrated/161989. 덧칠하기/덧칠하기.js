function solution(n, m, section) {
    let cnt = 0;
    let rollerPos = 0;
    
    section.forEach((wall) => {
        if(rollerPos < wall) {
            rollerPos = wall + m - 1;
            cnt++;
        }
    })
    
    return cnt;
}