function solution(a, b) {
    var answer = 0;
   
    if(a < b) {
         for(let i = a; i <= b; i++) {
        answer += i
    }
        return answer;
        
    } else if (a > b) {
        for(let i = b; i <= a; i++) {
        answer += i
    }
        
        return answer;
    } else {
        return a
    }
}

// 등차수열의 합
// return (a + b) * (Math.abs(a - b) + 1) / 2