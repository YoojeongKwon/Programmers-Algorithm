function solution(arr) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === arr[j][i]) {
               answer = [...answer, 1] 
            } else {
                answer = [...answer, 0]
            }
        }
     }
    
    return answer.includes(0) ? 0 : 1
}

// function solution(arr) {    
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr[0].length; j++) {
//             if (arr[i][j] !== arr[j][i]) {
//               return 0;
//             }
//         }
//      }
    
//     return 1;
// }
