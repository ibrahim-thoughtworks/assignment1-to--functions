function getPrimeFactors(candidate) {
  let candidateNumber = candidate;
  let repeat = 2;
  let primeFactors = "";

  for (; repeat <= candidateNumber; repeat++) {

    if (candidateNumber % repeat === 0 ) {
      candidateNumber = candidateNumber / repeat;
      primeFactors += repeat + " ";
      repeat = 1;
    }

  }

  return primeFactors;
}

function createMessage(candidate, actualPrimeFactors, expectedPrimeFactors) {
  const symbol = (actualPrimeFactors === expectedPrimeFactors) ? "✅" : "❌";
  const message = symbol + " : " + candidate + " : got " + actualPrimeFactors + " expected " + expectedPrimeFactors;
  console.log(message);
}

function testPrimeFactors(candidate, expectedPrimeFactors) {
  const primeFactors = getPrimeFactors(candidate);
  createMessage(candidate, primeFactors, expectedPrimeFactors);
}

function testCases() {
  testPrimeFactors(100, "2 2 5 5 ");
  testPrimeFactors(3, "3 ");
  testPrimeFactors(10, "2 5 ");
}

testCases();

