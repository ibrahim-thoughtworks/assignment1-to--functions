function fibonacci(endTerm) {
    if (endTerm === 0) {
        return ;
    }
    let nextTerm = 0;
    let afterNextTerm = 1;
    let nthTerm = 0;
    
    for ( let currentTerm = 0 ; currentTerm < endTerm ; currentTerm++) {
        nthTerm = nthTerm + nextTerm;
        nextTerm = afterNextTerm;
        afterNextTerm = nthTerm;
    }

    return nthTerm;
}

function messageCreate(nthTerm, expectedTerm) {
    const symbol = (nthTerm === expectedTerm) ? "✅" : "🚫 ";
    const message = symbol + " : got " + nthTerm + " expected " + expectedTerm;
    console.log(message);
}

function testFibonacci(endTerm, expectedTerm) {
    const nthTerm = fibonacci(endTerm);
    messageCreate(nthTerm, expectedTerm);
}

function testCases() {
    testFibonacci(0, );
    testFibonacci(1, 0);
    testFibonacci(2, 1);
    testFibonacci(3, 1);
    testFibonacci(5, 3);
    testFibonacci(10, 34);
}

testCases();
