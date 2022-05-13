function smallEnough(a, limit) {
    //get an array 
    //look through the array so that it's below or equal to the limit value
    //nums = a.filter(num => num < limit)

    for (let i of a)
        if (a > limit) {
            return true
        }
    return false
}