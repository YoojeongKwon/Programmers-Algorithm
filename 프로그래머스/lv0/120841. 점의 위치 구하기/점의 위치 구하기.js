function solution(dot) {
    const answer = dot.filter(n => n > 0).length;
    
    if(answer === 2) {
        return 1
    } else if (answer === 0) {
        return 3
    } else if (answer === 1 && dot[0] < 0) {
        return 2
    } else {
        return 4
    }
}