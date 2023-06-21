function solution(arr) {
    return arr.map(num => {
        if(num >= 50 && num%2 === 0) {
            return num/2
        } else if (num < 50 && num%2 === 1) {
            return num*2
        } else {return num}
    })
}

// const solution= arr => arr.map(num => num >= 50 && num % 2 == 0 ? num/2 : num < 50 && num % 2 == 1 ? num*2 : num)
// 삼항 연산자를 이렇게 써도 됨!
