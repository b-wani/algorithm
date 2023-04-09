function solution(x) {
    const sum = String(x).split('').map(v => +v).reduce((a,b) => a+b);
    return x % sum === 0 ? true : false;
}