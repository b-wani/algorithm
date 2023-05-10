function solution(keymap, targets) {
    // 키맵을 통해서 각 키를 입력하기 위한 최소 값을 객체로 저장
    // array.map을 실행하여 각 문자마다 객체의 값을 접근하여 최소값을 리턴
    const keyHash = {};
    
    keymap.forEach((str) => {
        const keyArr = str.split('');
        keyArr.forEach((key, idx) => {
            if(keyHash[key]) {
                keyHash[key] = keyHash[key] > idx + 1 ? idx + 1 : keyHash[key];
            } else {
                keyHash[key] = idx + 1;
            }
        })
    })
    
    const answer =targets.map((target) => {
        let cnt = 0;
        for(const key of target) {
            if(!keyHash[key]) {
                return -1;
            } else {
                cnt += keyHash[key];
            }
        }
        return cnt;
    })
    
    return answer;
}