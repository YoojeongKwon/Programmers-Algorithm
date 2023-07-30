function solution(s) {
    let arr = s.split(' ').reverse();
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Z') {
            arr.splice(i, 1, "0")
            arr.splice(i+1, 1, "0")
        }
    }
    return arr.reduce((acc, curr) => acc + Number(curr), 0)
}