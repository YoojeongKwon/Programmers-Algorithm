function solution(array) {
    var answer = 0;
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] - array[i+1] < 0) {
            answer = array[i+1]
        }
    }
    
    return [answer, array.indexOf(answer)]
}