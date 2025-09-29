// Do not rename a, use them as input for your program.
// While testing we will change its values.

const palindromCandidate = 121;

// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
function remainderFinder(candidate, divider) {
    return candidate % divider;
}

function checkEqual(firstValue, secondValue) {
    return firstValue === secondValue;
}

function checkPalindrom(palindromCandidate) {
    let number = palindromCandidate;
    let reverseOfPalindromCandidate = 0;
    
    while (number >= 1) {
        const reminder = remainderFinder(number, 10);
        number = (number - reminder) / 10;
        reverseOfPalindromCandidate = reverseOfPalindromCandidate * 10 + reminder;
    }

    return checkEqual(palindromCandidate, reverseOfPalindromCandidate);
}

function messageCreate(palindromCandidate, actualResult, expectedResult) {
    const symbol = checkEqual(actualResult, expectedResult) ? "✅" : "❌";
    const message = symbol + " : " + palindromCandidate + " : got " + actualResult + " expected " + expectedResult;
    console.log(message);
}

function testPalindrom(palindromCandidate, expectedResult) {
    const isPalindrom = checkPalindrom( palindromCandidate);
    messageCreate(palindromCandidate, isPalindrom, expectedResult);
}

function testCases() {
    testPalindrom(1, true);
    testPalindrom(121, true);
    testPalindrom(456, false);
    testPalindrom(1001, true);
}

testCases();
