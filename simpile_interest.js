function messageCreate(actualInterest, expectedInterest) {
  const symbol = (actualInterest === expectedInterest) ? "💚" : "❤️";
  const message = symbol + " : " + "I got " + actualInterest + " I expected " + expectedInterest;
  return message;
}

function simpleInterestCalculate(principle, rate, time, expectedInterest) {
    const simpleInterst = ((principle * time * rate) / 100);
    const message = messageCreate(simpleInterst, expectedInterest)
    console.log(message);
}

function testSimpleInterest() {
    simpleInterestCalculate(10000, 20, 8, 16000);
    simpleInterestCalculate(-300000, 12, 10, -360000);
    simpleInterestCalculate(1000, 5, 3, 150);
    simpleInterestCalculate(-600000, 12, 8, -576000);
    simpleInterestCalculate(654321, 0.4, 2, 5234.568);
}

testSimpleInterest();
