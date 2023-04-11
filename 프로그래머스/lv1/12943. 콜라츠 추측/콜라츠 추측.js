function solution(num) {
    const max = 500;
    let count = 0;
    
    while(num !== 1 && count <= max) {
        count++;
        if(num % 2) {
            num = num * 3 + 1;
        } else {
            num = num / 2;   
        }
    }
    
    return count > max ? -1 : count;
}