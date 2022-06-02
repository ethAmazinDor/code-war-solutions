function narcissistic(value) {
    // must return true or false
    //get the length of the value 
    let leng = value.toString().length

    let myArr = String(value).split('').map((num) => { return Number(num) })

    let newArr = myArr.map((num) => Math.pow(num, leng)).reduce((acc, curr) => acc + curr, 0)

    if (newArr == value)
        return true
    return false


}
