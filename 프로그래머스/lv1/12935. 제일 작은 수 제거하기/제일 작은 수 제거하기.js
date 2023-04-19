function solution(arr) {
    const min = Math.min(...arr);
    const minIdx = arr.findIndex((value) => value === min);
    
    arr.splice(minIdx, 1);
    
    return arr.length ? arr : [-1];
}