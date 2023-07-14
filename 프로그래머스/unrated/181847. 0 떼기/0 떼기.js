function solution(n_str) {
    let index = 0;
    
    // while문은 조건문이 참일 때 실행되는 반복문
    while(index < n_str.length && n_str[index] === '0') {
        index++
    }
    
    return n_str.substring(index);
}