function solution(arr) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        let pushArr = new Array(arr[i]).fill(arr[i])
        
        answer = [...answer, ...pushArr]
    }
    return answer;
}