function toEven(x) {
  return (x % 2 === 1) ? x + 1 : x;
}

function selectingEvenValues(startOfRange, endOfTheRange) {
  let evenValues = "";
  for (let currentValue = startOfRange; currentValue <= endOfTheRange; currentValue+=2) {
    evenValues += currentValue + " ";
  }
  return evenValues;
}

function checkSimilarity(actualEvenNumbers, expectedEvenNumbers) {
  return actualEvenNumbers === expectedEvenNumbers;
}

function testEven(startOfRange, endOfTheRange, expectedEvenNumbers) {
  const actualStartOfRange = toEven(startOfRange);
  const evenValues = selectingEvenValues(actualStartOfRange, endOfTheRange);
  printMessage(evenValues, expectedEvenNumbers);
}

function printMessage(evenValues, expectedEvenNumbers) {
  const isSimilar = checkSimilarity(evenValues, expectedEvenNumbers);
  const symbol = isSimilar ? "✅" : "⚠️";
  const message = symbol + " : " + "Got " + evenValues + " expected " + expectedEvenNumbers;
  console.log(message);
}

function testCases() {
  testEven(1, 10, "2 4 6 8 10 ");
  testEven(6, 12, "6 8 10 12 ");
  testEven(10, 10, "10 ");
}

testCases();
