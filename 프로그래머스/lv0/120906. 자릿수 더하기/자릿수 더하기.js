function solution(n) {
    let answer = 0;
    const stringN = String(n)
    
    for (let i = 0; i < stringN.length; i++) {
        answer = answer + Number(stringN[i])
    }
    return answer;
}