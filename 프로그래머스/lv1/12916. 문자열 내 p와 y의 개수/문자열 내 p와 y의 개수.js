function solution(s){
    let strArr = s.toLowerCase().split('')
    
    return strArr.filter(el => el === 'p').length === strArr.filter(el => el === 'y').length
}