function solution(order) {
    var answer = 0;
    
    for(let i = 0; i < String(order).length; i++) {
        if(Number(String(order)[i])%3 === 0 && String(order)[i] !== '0') {
            answer += 1
        }
    }
    return answer;
}