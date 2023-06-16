function solution(arr, idx) {
    if(arr.slice(idx).indexOf(1) === -1) {
        return -1
    } else {
        return arr.slice(idx).indexOf(1) + idx
    }
}