function solution(box, n) {
    return box.map(el => parseInt(el/n)).reduce((acc, curr) => acc * curr, 1)
}