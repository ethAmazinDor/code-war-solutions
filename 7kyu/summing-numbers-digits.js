function sumDigits(number) {
    //get a number 
    absNum = Math.abs(number)
    let myFunc = num => Number(num)
    //convert that number into an array 
    intArr = Array.from(String(absNum), myFunc)

    return intArr.reduce((acc, c) => acc + c, 0)
    //add the two numbers 
    //return numbers
}
