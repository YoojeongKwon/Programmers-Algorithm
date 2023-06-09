function solution(my_string, is_suffix) {
    return my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0
}

// string.endsWith(searchString, length) -> 문자열의 끝이 특정 문자열로 끝나는지 찾기 위한 method, 문자열의 끝이 주어진 문자열로 끝나면 true, 그렇지 않다면 false
