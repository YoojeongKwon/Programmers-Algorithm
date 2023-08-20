function solution(price) {
    const priceN = Number(price)
    
    if (priceN >= 500000) {
        return Math.floor(priceN * 0.8)
    }
    if (priceN >= 300000) {
        return Math.floor(priceN * 0.9)
    }
    if (priceN >= 100000) {
        return Math.floor(priceN * 0.95)
    }
    
    return priceN
}