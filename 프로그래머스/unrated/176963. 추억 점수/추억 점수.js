function solution(name, yearning, photo) {
    // name과 yearning으로 이름: 점수 구조의 객체를 만든다.
    // photo를 map하여 만든 객체를 활용하여 result 형태로 return한다.
    
    const obj = {};
    for(let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i];
    }
    
    return photo.map((names) => names.reduce((acc, cur) => acc + (obj[cur] || 0), 0))
}