function fibonacci(endTerm) {
    if (endTerm === 0) {
        return "";
    }
    let nextTerm = 0;
    let afterNextTerm = 1;
    let nthTerm = 0;
    let fibonacciSeries = "";
    for ( let currentTerm = 0 ; currentTerm < endTerm ; currentTerm++) {
        nthTerm = nthTerm + nextTerm;
        nextTerm = afterNextTerm;
        afterNextTerm = nthTerm;
        fibonacciSeries += nthTerm + " ";
    }

    return fibonacciSeries;
}

function messageCreate(fibonacciSeries, expectedTerm) {
    const symbol = (fibonacciSeries === expectedTerm) ? "✅" : "🚫 ";
    const message = symbol + " : got " + fibonacciSeries + " expected " + expectedTerm;
    console.log(message);
}

function testFibonacci(endTerm, expectedTerm) {
    const nthTerm = fibonacci(endTerm);
    messageCreate(nthTerm, expectedTerm);
}

function testCases() {
    testFibonacci(0, "");
    testFibonacci(1, "0 ");
    testFibonacci(2, "0 1 ");
    testFibonacci(3, "0 1 1 ");
    testFibonacci(5, "0 1 1 2 3 ");
    testFibonacci(10, "0 1 1 2 3 5 8 13 21 34 ");
}

testCases();
