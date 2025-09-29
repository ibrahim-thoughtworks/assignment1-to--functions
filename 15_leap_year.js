function leapYearChecker(year) {
    const isDividableByFour = year % 4 === 0 && year % 100 !== 0;
    const isdivisableBy400 = year % 400 === 0;
    const isLeapYear = (isDividableByFour || isdivisableBy400) ;
    return isLeapYear;
}

function messageCreate(year, actualResult, expectedResult) {
    const symbol = (actualResult === expectedResult) ? "✅" : "❌";
    const message = symbol + " : " + year + " : got " + actualResult + " expected " + expectedResult;
    console.log(message);
}

function testLepYear(year, expectedResult) {
    const isLeapYear = leapYearChecker(year);
    messageCreate(year, isLeapYear, expectedResult);
}

function testCases() {
    testLepYear(2000, true);
    testLepYear(100, false);
    testLepYear(4, true);
}

testCases();
