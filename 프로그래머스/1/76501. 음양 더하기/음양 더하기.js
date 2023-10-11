function solution(absolutes, signs) {
    var answer = [];
    
    for(let i = 0; i < signs.length; i++) {
        signs[i] ? answer.push(absolutes[i]) : answer.push(absolutes[i]*(-1))
    }
    return answer.reduce((acc, curr) => acc + curr);
}