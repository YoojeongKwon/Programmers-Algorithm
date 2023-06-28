function solution(myString) {
    var answer = []
    
    myString.split('x').forEach(v => {
        if (v !== '') {
            answer = [...answer, v]
        } 
    })
    return answer.sort()
}

// filter 사용 계속 생각하기!!
// function solution(myString) {
//   return myString
//     .split("x")
//     .filter((str) => str !== "")
//     .sort();
// }
