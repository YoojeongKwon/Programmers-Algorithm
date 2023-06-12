function solution(my_string, s, e) { 
   return my_string.slice(0, s) + my_string.substring(s, e+1).split('').reverse().join('') + my_string.slice(e+1, my_string.length)
}