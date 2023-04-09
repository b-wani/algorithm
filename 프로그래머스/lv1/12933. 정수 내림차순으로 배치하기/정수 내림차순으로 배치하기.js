function solution(n) {
    let result = '';
    
    const numbers = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
    }
    
    for(const number of String(n)) {
        numbers[number]++;
    }
    
    for(let i = 9; i >= 0; i--) {
        result += `${i}`.repeat(numbers[i]);
    }
    
    return +result;
}