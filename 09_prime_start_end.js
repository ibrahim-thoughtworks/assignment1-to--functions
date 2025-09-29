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
    let primeNumbers = "";
    
    for(let currentTerm = startOfRange; currentTerm <= endOfTheRange; currentTerm++) {
        if ( checkPrime(currentTerm) ){
            primeNumbers += currentTerm + " ";
        }
    }
    return primeNumbers;
}

function messageCreate(startOfRange, endOfTheRange, actualResult, expectedResult) {
    const symbol = actualResult === expectedResult ? "✅" : "🔺";
    const message = symbol + " : " + startOfRange + " -> " + endOfTheRange + ":: got " + actualResult + " expected " + expectedResult;
    console.log(message);
}

function testPrimes(startOfRange,endOfTheRange, expectedResult) {
    const primeNumbers = checkPrimeNumbersBetween(startOfRange, endOfTheRange);
    messageCreate(startOfRange, endOfTheRange, primeNumbers, expectedResult);
}

function testCases() {
    testPrimes(2, 5, "2 3 5 ");
    testPrimes(3, 10, "3 5 7 ");
    testPrimes(4, 21, "5 7 11 13 17 19 ");
    testPrimes(5, 7, "5 7 ");
    testPrimes(97, 110, "97 101 103 107 109 ");
}

testCases();


