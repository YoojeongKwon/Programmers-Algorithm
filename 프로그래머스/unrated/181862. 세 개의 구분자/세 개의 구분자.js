function solution(myStr) {
    const answer = myStr.split(/a|b|c/).filter(el => el !== '')
    
    if(answer.length === 0) {
        return  ["EMPTY"]
    }
    
    return answer
}
    