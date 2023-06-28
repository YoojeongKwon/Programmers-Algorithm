function solution(myString) {
    var answer = []
    
    myString.split('x').forEach(v => {
        if (v !== '') {
            answer = [...answer, v]
        } 
    })
    return answer.sort()
}