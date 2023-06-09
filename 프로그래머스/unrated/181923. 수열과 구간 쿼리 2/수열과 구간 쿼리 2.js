function solution(arr, queries) {
    var answer = [];
    
    for (let i = 0; i < queries.length; i++) {
        const [start, end, k] = queries[i]
        let minValue = Infinity;
        let found = false;
        
        for (let j = start; j <= end; j++) {
            if(arr[j] > k && arr[j] < minValue) {
                minValue = arr[j]
                found = true
            }
        }
        if (found) {
            answer = [...answer, minValue]
        } else {
            answer = [...answer, -1]
        }
        
    }
    
    return answer;
}