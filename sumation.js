
const summation = (n) => {
    let total = 0;
    for (i = 1; i <= n; i++) {
        total += i
    }
    return total;
}
const nSummation = (n) => {
    return n * (n + 1) / 2;
}

let n = 3000000;
console.time("Summation function");
console.log(summation(n));
console.timeEnd("Summation function");

console.time("nSummation function");
console.log(nSummation(n));
console.timeEnd("nSummation function");