function solution(n) {
    // *1을 하면 문자열에서 숫자로 형변환 됨
    // 문자열로 푸는 것보다 숫자로 푸는게 속도가 더 빠름
    
    return String(n).split('').sort().reverse().join('')*1
}