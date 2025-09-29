function multiplier(pastTerm, currentTerm) {
    return pastTerm * currentTerm;
}

function factorial(limit) {
    let fact = 1;

    for (let currentTerm = 1; currentTerm <= limit; currentTerm++) {
        fact = multiplier(fact, currentTerm);
    }

    return fact;
}

function messageCreate(actualFactorial, expectedFactorial) {
    const symbol = (actualFactorial === expectedFactorial) ? "✅" : "❌";
    const message = symbol + " : got " + actualFactorial + " expected " + expectedFactorial;
    console.log(message);
}

function testFactorial(limit, expectedFactorial) {
    const actualFactorial = factorial(limit);
    messageCreate(actualFactorial, expectedFactorial);
}

function testCases(){
    testFactorial(5, 120);
    testFactorial(1, 1);
    testFactorial(2, 2);
    testFactorial(3, 6);
}

testCases();
