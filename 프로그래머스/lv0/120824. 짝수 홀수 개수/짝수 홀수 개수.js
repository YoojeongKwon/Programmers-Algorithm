function solution(num_list) {
    let odd = [];
    let even = [];
    
    for(let i = 0; i < num_list.length; i++) {
        num_list[i]%2 === 0 ? even.push(num_list[i]) : odd.push(num_list[i])
    }
    return [even.length, odd.length];
}