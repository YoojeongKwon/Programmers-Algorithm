function solution(my_string, num1, num2) {
    let myArr = my_string.split('');
    
    [myArr[num1], myArr[num2]] = [myArr[num2], myArr[num1]];
    
    return myArr.join('');
}