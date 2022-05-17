function uniqueInOrder(it) {
    //store our result in an array 
    let newArr = []

    for (let i = 0; i < it.length; i++) {
        //if the current element is not equal to the next element
        if (it[i] !== it[i + 1]) {
            //push the element into the array
            newArr.push(it[i])
        }
    }

    return newArr
}