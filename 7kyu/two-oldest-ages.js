function twoOldestAges(ages) {
    //sort the array 
    sortedArr = ages.sort((a, b) => a - b)

    return sortedArr.slice(-2)
}
