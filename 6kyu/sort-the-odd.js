function sortArray(array) {
    //
    const oddNums = array.filter((number) => number % 2)
    const sortedOddNums = oddNums.sort((a, b) => a - b)

    return array.map(number => number % 2 ? sortedOddNums.shift() : number)
    //sort odd numbers in ascending order

}