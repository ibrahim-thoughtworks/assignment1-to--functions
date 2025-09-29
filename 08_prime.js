function checkDividable(divident, divider) {
    return divident % divider === 0;

}

function checkPrime(primeCandidate) {
    let isPrime = true;
    let primeCandidateDemo = primeCandidate;

    for (let divider = 2; divider < primeCandidateDemo && isPrime; divider++) {
        isPrime = !checkDividable(primeCandidate, divider)
    }
    return isPrime;
}

function messageCreate(primeCandidate, actualResult, expectedResult) {
    const symbol = actualResult === expectedResult ? "✅" : "🔺";
    const message = symbol + " : " + primeCandidate + " :: got " + actualResult + " expected " + expectedResult;
    console.log(message);
}

function testPrimes(primeCandidate, expectedResult) {
    const isPrime = checkPrime(primeCandidate);
    messageCreate(primeCandidate, isPrime, expectedResult);
}

function testCases() {
    testPrimes(2, true);
    testPrimes(3, true);
    testPrimes(4, false);
    testPrimes(5, true);
    testPrimes(97, true);
}

testCases();


