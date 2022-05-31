/*


Complete the function that takes two integers
(a, b, where a < b) and return an array of all integers between the input parameters,
including them.
*/


function between(a, b) {
    //create a variable for an array 
    let emptyArr = []
    //loop through each number from beginning to end 
    for (let i = a; i <= b; i++) {
        // push the numbers into empty Arr
        emptyArr.push(i)
    }
    //return emptyARr
    return emptyArr

}