function findOdd(A) {
    let result
    let counterObject = {}

    A.forEach((num) => {
        if (counterObject[num]) {
            counterObject[num]++
        }
        counterObject[num] = 1
    })

    for (let num in counterObject) {
        if (counterObject[num] % 2 == 1) {
            result = num
        }
    }

    return result
}