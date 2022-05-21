function createPhoneNumber(numbers) {
    //get an array of 10 integers 
    return `${numbers.slice(0, 3).join('')} ${numbers.slice(3, 6).join('')} ${numbers.slice(6, 9).join('')}`

}