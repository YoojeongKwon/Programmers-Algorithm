function solution(n) {
    var answer = [];
    for(let i = 1; i <= n; i++) {
        if(n%i === 0) {
            answer = [...answer, i]
        }
    }
    return answer.length
}