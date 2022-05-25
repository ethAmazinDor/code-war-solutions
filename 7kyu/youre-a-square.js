var isSquare = function (n) {
    if (n < 0)
        return false

    squareNum = Math.sqrt(n) % 1 === 0

    if (squareNum)
        return true
    else
        return false


}