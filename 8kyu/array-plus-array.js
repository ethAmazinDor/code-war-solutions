function arrayPlusArray(arr1, arr2) {
    //get an array 
    //add up all the numbers in one array 
    //add up all the numbers in array2 / reduce

    // let firstArr = arr1.reduce((acc, curr) => acc + curr, 0)
    // let secondArr = arr2.reduce((acc, curr) => acc + curr, 0)


    // return firstArr + secondArr


    let concatArr = arr1.concat(arr2)

    return concatArr.reduce((acc, curr) => acc + curr, 0)


}
