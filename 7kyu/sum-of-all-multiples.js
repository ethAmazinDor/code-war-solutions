function findSum(n) {
    //create a variable to store sum
    let result = 0
    //loop up to the number
    for (let i = 0; i <= n; i++) {
        //if number is a multiple of 3 or 5  
        if (i % 3 == 0 || i % 5 == 0) {
            //add it to an array 
            result += i
        }

    }
    //add the sum of the array 
    return result


    //return sum
}