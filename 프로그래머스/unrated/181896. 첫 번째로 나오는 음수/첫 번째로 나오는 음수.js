function solution(num_list) {
    var answer = 0;
    
    for(let i = 0; i < num_list.length; i++) {
            answer++
        
        if(num_list[i] < 0) {
            return i
        }
    }
    
    if(answer === num_list.length) {
            return -1
        }
}

// const answer = num_list.findIndex(el => el < 0)
