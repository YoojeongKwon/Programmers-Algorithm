function solution(strArr) {
    for(let i = 0; i < strArr.length; i++) {
       i%2 === 0 ? strArr.splice(i, 1, strArr[i].toLowerCase()) : strArr.splice(i, 1, strArr[i].toUpperCase())
    }
    
    return strArr
}

// function solution(strArr) {
//  return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
// }
