function solution(order) {
    const orderArr = [...order]
 
    return orderArr.map(drink => {
        return drink.includes('cafelatte') ? 5000 : 4500
    }).reduce((acc, curr) => acc + curr)
}