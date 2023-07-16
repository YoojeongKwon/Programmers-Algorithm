function solution(sides) {
    const max = Math.max(...sides);

    return max < sides.reduce((acc, curr) => acc + curr) - max ? 1 : 2
    
}