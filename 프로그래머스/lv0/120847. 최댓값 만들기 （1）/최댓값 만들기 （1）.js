function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            answer = [...answer, numbers[i] * numbers[j]]
        }
    }
    return Math.max(...answer)
}