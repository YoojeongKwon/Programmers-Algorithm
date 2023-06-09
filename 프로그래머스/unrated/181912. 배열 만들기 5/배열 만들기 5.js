function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.map(el => {
        const num = Number(el.slice(s, s+l))
        
        if (num > k) {
            answer = [...answer, num]
        }
    })
    return answer;
}