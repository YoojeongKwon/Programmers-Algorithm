function solution(my_string) {
    return my_string.split('').filter(el => Number.isInteger(Number(el))).map(el => Number(el)).sort()
}