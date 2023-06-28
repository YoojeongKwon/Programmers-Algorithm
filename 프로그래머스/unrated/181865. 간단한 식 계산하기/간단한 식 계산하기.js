function solution(binomial) {
    var [a, op, b] = binomial.split(' ');
    
    return op === '+' ? Number(a) + Number(b) : op === '-' ? Number(a) - Number(b) : Number(a) * Number(b)
}