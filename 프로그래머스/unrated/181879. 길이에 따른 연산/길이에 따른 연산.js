function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((prev, cur) => prev + cur, 0) : num_list.reduce((prev, cur) => prev * cur, 1)

}