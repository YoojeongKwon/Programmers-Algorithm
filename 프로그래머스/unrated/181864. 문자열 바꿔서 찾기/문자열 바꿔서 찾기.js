function solution(myString, pat) {
    var newMyString = ''
    
    for(let i = 0; i < myString.length; i++) {
       if(myString[i] === 'A') {
           newMyString += 'B'
       } else {
           newMyString += "A"
       }
    }
    return newMyString.includes(pat) ? 1 : 0
}