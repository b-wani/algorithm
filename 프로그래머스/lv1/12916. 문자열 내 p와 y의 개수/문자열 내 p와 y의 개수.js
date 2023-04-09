function solution(s){
    let answer = true;
    const count = {
        p: 0,
        y: 0,
    };
    
    for(const c of s.toLowerCase()) {
        if(c === 'p' || c === 'y') {
            count[c]++;
        }
    }
    
    if(count.p !== count.y) {
        return false;
    }
    

    return answer;
}