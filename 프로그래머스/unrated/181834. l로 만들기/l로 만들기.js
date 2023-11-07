function solution(myString) {
    var answer = 'abcdefghijklmnopqrstuvwxyz'
    
    for(let i = 0; i < myString.length; i++) {
        if(answer.indexOf(myString[i]) < 11) {
            myString = myString.replace(myString[i], 'l')
        }
    }
    return myString
    
}