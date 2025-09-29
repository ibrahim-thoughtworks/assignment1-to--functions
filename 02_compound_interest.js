
function simpleInterestCalculate(principle, rate) {
    return principle * rate / 100;
}

function calculateCompoundInterest(principle, time, rate) {
    let amount = principle;
    for (let repeat = 0; repeat < time; repeat++) {
        const interest = simpleInterestCalculate(amount, rate);
        amount += interest;
    }
    return amount - principle;
}

function messageCreate(actualInterest, expectedInterest) {
    const symbol = (actualInterest === expectedInterest) ? "💯" : "⛔️";
    const message = symbol + " : " + "I got " + actualInterest + " I expected " + expectedInterest;
    return message;
}

function round(value) {
    return value - (value % 1);
}

function testProgram(principle, time, rate, expectedInterest) {
    const actualInterest = calculateCompoundInterest(principle, time, rate);
    const message = messageCreate( round(actualInterest), expectedInterest);
    console.log(message);
}

function testing() {
    testProgram(10000, 3, 7, 2250);
    testProgram(5000, 2, 5, 512);
    testProgram(8000, 4, 6, 2099);
    testProgram(15000, 3, 10, 4965);
    testProgram(20000, 5, 8, 9386);
}

testing();
