function solution(hp) {
    // 조건 없이 이렇게만 써도 됨!
    return Math.floor(hp/5) + Math.floor((hp%5)/3) + (hp%5)%3;
}