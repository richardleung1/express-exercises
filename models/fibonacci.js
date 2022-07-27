const perfectSq = (n) => {
    let s = Math.sqrt(n)
    return s % 1 === 0
}
const fibonacci = (num) => {
    return perfectSq(5 * num * num + 4) ||
           perfectSq(5 * num * num - 4)
}

module.exports = fibonacci