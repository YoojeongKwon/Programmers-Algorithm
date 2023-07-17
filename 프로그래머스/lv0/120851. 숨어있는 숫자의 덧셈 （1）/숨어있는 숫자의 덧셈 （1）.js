function solution(my_string) {
    return my_string.split('').filter(el => Number(el)).reduce((acc, curr) => Number(acc) + Number(curr))
}