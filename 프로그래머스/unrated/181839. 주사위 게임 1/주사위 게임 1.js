function solution(a, b) {
    return a % 2 === 1 && b % 2 === 1 ? a*a + b*b : a % 2 === 1 || b % 2 === 1 ? 2*(a + b) : a > b ? a - b : b - a
}