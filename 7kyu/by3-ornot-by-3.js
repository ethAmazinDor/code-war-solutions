function divisibleByThree(str) {
    let nums = str.split('')


    //convert the string into an array 
    numArr = nums.map(num => {
        return Number(num)
    })

    addedNums = numArr.reduce((acc, c) => acc + c, 0)

    if (addedNums % 3 === 0) {
        return true
    } else {
        return false
    }

}