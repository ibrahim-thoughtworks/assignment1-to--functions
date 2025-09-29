function checkAnyZero(firstNumber, secondNumber) {
    return (firstNumber === 0 || secondNumber === 0);
}

function checkLcm(firstNumber, secondNumber) {

  if ( checkAnyZero(firstNumber, secondNumber) ) {
    return 0;
  }

  let lcm = (firstNumber > secondNumber) ? firstNumber : secondNumber;

  while( !(lcm % firstNumber === 0 && lcm % secondNumber === 0) ) {
    lcm ++;
  }

  return lcm;
}

function messageCreate(firstNumber, secondNumber, actualLcm, expectedLcm) {
  const symbol = (actualLcm === expectedLcm) ? "✅" : "❌";
  const message = symbol + " : " + firstNumber + "-" + secondNumber + " : got " + actualLcm + " expected " + expectedLcm;
  console.log(message);
}

function testLcm(firstNumber, secondNumber, expectedLcm) {
  const actualLcm = checkLcm(firstNumber, secondNumber);
  messageCreate(firstNumber, secondNumber, actualLcm, expectedLcm);
}

function testCases() {
  testLcm(5, 10, 10);
  testLcm(10, 15, 30);
  testLcm(100, 350, 700);
}

testCases();
