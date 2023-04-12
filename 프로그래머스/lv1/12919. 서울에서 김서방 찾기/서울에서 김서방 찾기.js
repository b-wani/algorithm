function solution(seoul) {
    const target = 'Kim';
    const index = seoul.findIndex((value) => value === target);
    
    return `김서방은 ${index}에 있다`
}