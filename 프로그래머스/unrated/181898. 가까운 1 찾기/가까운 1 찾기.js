function solution(arr, idx) {
    if(arr.slice(idx).indexOf(1) === -1) {
        return -1
    } else {
        return arr.slice(idx).indexOf(1) + idx
    }
}

// const solution=(arr,idx)=>arr.indexOf(1,idx);
// 배열 arr에서 숫자 1을 검색하는데, idx에서부터 검색을 시작함
