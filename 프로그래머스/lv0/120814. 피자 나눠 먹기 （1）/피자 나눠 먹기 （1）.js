function solution(n) {
    for(let i = 1; i <= n; i++) {
        if(i*7 >= n) {
            return i;
        }
    }
}