function pad(stringExample, symbol, repeatCount, whereToAdd) {
    if (repeatCount <= stringExample.length) {
        return stringExample
    }

    let resultLength = repeatCount - stringExample.length;
    let resultString = ''

    while (resultString.length < resultLength) {
        resultString += symbol
    }

    if (whereToAdd) {
        return resultString + stringExample
    } else {
        return stringExample + resultString
    }
}


console.log(pad('hello', '*', 2, true))
console.log(pad('hello', '*', 8, false))
