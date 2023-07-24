function solution(my_string) {
    return my_string.split('').filter(el => !(el.includes('a') || el.includes('e') || el.includes('i') || el.includes('o') || el.includes('u'))).join('');
}