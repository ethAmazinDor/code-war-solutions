function insertDash(num) {

    let dashNumber = ''

    let numArr = num.toString().split('')

    for (let i = 0; i < numArr.length; i++) {
        dashNumber += numArr[i]
        if (numArr[i] % 2 && (numArr[i + 1] && numArr[i + 1] % 2)) {
            dashNumber += '-'
        }
    }

    return dashNumber

}