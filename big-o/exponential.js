// Fibonacci
const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    } else {
        // console.log(n);
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}
// fibonacci(6)
console.log(fibonacci(6)); // 8