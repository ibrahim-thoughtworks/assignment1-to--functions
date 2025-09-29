
function checkAnyZero(firstNumber, secondNumber) {
    return (firstNumber === 0 || secondNumber === 0);
}

function hcfChecker(firstNumber, secondNumber) {

    if ( checkAnyZero(firstNumber, secondNumber) ) {
        return firstNumber || secondNumber;
    }

    let divider = (firstNumber < secondNumber) ? firstNumber : secondNumber;

    while ( !(firstNumber % divider === 0 && secondNumber % divider === 0) ) {
        divider--;
    }
    
    return divider;
}

function messageCreate(firstNumber, secondNumber, actualHcf, expectedHcf) {
    const symbol = (actualHcf === expectedHcf) ? "❤️‍🔥" : "☢️";
    const message = symbol + " : " + firstNumber + "-" + secondNumber + " :  got " + actualHcf + " expected " + expectedHcf;
    console.log(message);
}

function hcfTester(firstNumber, secondNumber, expectedHcf) {
    const actualHcf = hcfChecker(firstNumber, secondNumber);
    messageCreate(firstNumber, secondNumber, actualHcf, expectedHcf);
}

function hcfTestCases() {
    hcfTester(10, 5, 5);
    hcfTester(5, 10, 5);
    hcfTester(10, 15, 5);
    hcfTester(0, 7, 7);
}

hcfTestCases();
