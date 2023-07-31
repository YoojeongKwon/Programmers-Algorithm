function solution(rsp) {
    return rsp.split('').map(el => {
        return el === '2' ? '0' : el === '5' ? '2' : '5'
    }).join('')
}