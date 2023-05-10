function solution(n, m, section) {
    // 처음 색칠할 벽의 위치를 구한다
    // 롤러 길이 만큼 더한다
    // 
    if(m === 1) {
        return section.length;
    }
    
    let cnt = 1;
    let rollerPos = section[0] + m;
    
    for(let i = 1; i < section.length; i++) {
        if(rollerPos === section[i]) {
            rollerPos += m;
            cnt++;
        } else if(rollerPos < section[i]) {
            rollerPos = section[i] + m;
            cnt++;
        }
    }
    
    return cnt;
}