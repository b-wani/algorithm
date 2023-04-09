function solution(n) {
    let sum = 0;
    for(let number of String(n)) {
        sum += +number;
    }
    return sum;
}