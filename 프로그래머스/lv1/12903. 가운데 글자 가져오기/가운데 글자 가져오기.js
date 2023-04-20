function solution(s) {
    const idx = s.length / 2;
    
    if(s.length % 2) {
        return s[Math.floor(idx)];
    } else {
        return s[idx - 1] + s[idx];
    }
}