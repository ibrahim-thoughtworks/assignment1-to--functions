
function convertToDecimal(decimalNumber) {

    let usingDecimalNumber = decimalNumber;
    let binary = "";
    if (decimalNumber === 0) {
        return "0 ";
    }

    while (usingDecimalNumber >= 1) {
        let binaryBit = usingDecimalNumber % 2;
        binary = binaryBit + " " + binary;
        usingDecimalNumber = (usingDecimalNumber - binaryBit) / 2;
    }

    return binary;

}

function printMessage(binary, expectedBinary) {

    const symbol = (binary === expectedBinary) ? "✅" : "‼️";
    const message = symbol + " : got " + binary + " expected " + expectedBinary;
    console.log(message);

}

function testProgram(decimalNumber, expectedBinary) {

    const binary = convertToDecimal(decimalNumber);
    printMessage(binary, expectedBinary);

}

function testCases() {
    testProgram(65, "1 0 0 0 0 0 1 ");
    testProgram(0, "0 ");
    testProgram(4, "1 0 0 ");
    testProgram(10, "1 0 1 0 ");
    testProgram(16, "1 0 0 0 0 ");
}

testCases();
