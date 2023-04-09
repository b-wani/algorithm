function solution(a, b) {
    const [min, max] = a > b ? [b, a] : [a, b];
    let answer = 0;
    
    for(let i = min; i <= max; i++) {
        answer += i;
    }
    
    return answer;
}