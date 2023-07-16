function solution(my_string) {
    return my_string.split('').map(el => {
        return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    }).join('')
}