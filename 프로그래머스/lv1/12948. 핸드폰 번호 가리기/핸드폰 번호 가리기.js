function solution(phone_number) {
    const length = phone_number.length;
    const lastNum = phone_number.slice(-4);
    
    return '*'.repeat(length - 4) + lastNum;
}