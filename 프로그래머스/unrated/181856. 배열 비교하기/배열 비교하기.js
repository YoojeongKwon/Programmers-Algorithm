function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1
    } else {
        return arr1.reduce((prev, cur)=> {
            return prev + cur
        }) > arr2.reduce((prev, cur)=> {
            return prev + cur
        }) ? 1 : arr1.reduce((prev, cur)=> {
            return prev + cur
        }) < arr2.reduce((prev, cur)=> {
            return prev + cur
        }) ? -1 : 0
    }
}