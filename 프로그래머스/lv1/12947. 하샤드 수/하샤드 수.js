function solution(x) {
    return x%String(x).split('').reduce((acc, curr) => acc + Number(curr), 0) === 0;
}