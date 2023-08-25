function solution(a, b) {
    let answer = []
    
    for(let i = 0; i < a.length; i++) {
       answer = [...answer, a[i]*b[i]]
   }
    
    return answer.reduce((acc, curr) => acc + curr)
}