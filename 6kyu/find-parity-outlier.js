
/*
You are given an array (which will have a length of at least 3, but could be very 
    large) containing integers. The array is either entirely comprised of odd integers
     or entirely comprised of even integers except for a single integer N. 
     Write a method that takes the array as an argument and returns this "outlier" N.

*/


function findOutlier(integers) {
    //create a variable for the outlier 
    let oddArr = []
    let evenArr = []

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenArr.push(integers[i])
        } else {
            oddArr.push(integers[i])
        }
    }

    if (evenArr.length == 1)
        return evenArr[0]
    return oddArr[0]
}