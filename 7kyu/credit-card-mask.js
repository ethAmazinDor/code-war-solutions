function maskify(cc) {
    //get a string 
    let credit = cc.split('')
    //iterate through the string
    for (let i = 0; i < credit.length - 4; i++) {
        //replace each number with a # 
        credit[i] = '#'


    }
    credit = credit.join('')
    return credit

}
