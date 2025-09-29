// Do not rename a use it as input for your program.
// While testing we will change its values.

const number = 0;

// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
function countDigitsInANumber(number) {
  let power = 1;
  let numberToWork = number; 
  let digits = 0;

  while (numberToWork / power >= 1) {
    digits++;
    power = power * 10;
  }

  return digits;
}

function checkArmstrongOrNot(armstrongCandidate) {
  let number = armstrongCandidate;
  const digits = countDigitsInANumber(number);
  let armstrong = 0;

  while (number >= 1) {
    const remainder = number % 10;
    armstrong = armstrong + (remainder ** digits);
    number = (number - remainder) / 10;
  }

  return armstrong === armstrongCandidate;
}

function messageCreate(armstrongCandidate, actualResult, expectedResult) {
  const symbol = (actualResult === expectedResult) ? "✅" : "❌";
  const message = symbol + " : " + armstrongCandidate + " : got " + actualResult + " expected " + expectedResult;
  console.log(message);
}

function testArmstrong(armstrongCandidate, expectedResult) {
  const isAmstrong = checkArmstrongOrNot(armstrongCandidate);
  messageCreate(armstrongCandidate, isAmstrong, expectedResult);
}

function testCases() {
  testArmstrong(1, true);
  testArmstrong(0, true);
  testArmstrong(5, true);
  testArmstrong(9474, true);
  testArmstrong(100, false);
}

testCases();

