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

function checkPrimeNumbersBetween(startOfRange, endOfTheRange){

  let isPrime = false;
  let currentTerm = startOfRange;
  while (!isPrime) {
    currentTerm += 1;
    isPrime = checkPrime(currentTerm);
  }
    return currentTerm;
}

function messageCreate(startOfRange, actualResult, expectedResult) {
    const symbol = actualResult === expectedResult ? "✅" : "🔺";
    const message = symbol + " : " + startOfRange + " : got " + actualResult + " expected " + expectedResult;
    console.log(message);
}

function testPrimes(startOfRange, expectedResult) {
    const primeNumber = checkPrimeNumbersBetween(startOfRange);
    messageCreate(startOfRange, primeNumber, expectedResult);
}

function testCases() {
    testPrimes(2, 3);
    testPrimes(3, 5);
    testPrimes(4, 5);
    testPrimes(5, 7);
    testPrimes(97, 101);
}

testCases();


