function alphabetPosition(text) {
    //create an empty string
    let emptyStr = []

    textArr = text.trim().split('')
    //iteratte thorugh the stirng 
    textArr.forEach((char) => {
        const ascii = char.charCodeAt()

        if (ascii >= 97 && ascii <= 122) {
            emptyStr.push(ascii - 96)
        }
    })

    return emptyStr.toString()


    //each character in the string replace it with its position in the alphabet
    //insert it into empty string
    //return empty string 

}