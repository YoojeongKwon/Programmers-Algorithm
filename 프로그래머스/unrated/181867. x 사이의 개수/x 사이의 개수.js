function solution(myString) {
    var answer = []
    var splittedStr =  myString.split('x')
    
    for(let i = 0; i < splittedStr.length; i++) {
        answer = [...answer, splittedStr[i].length]
    }
    return answer;
}

// function solution(myString) {
//     return myString.split('x').map(v => v.length);
// }
