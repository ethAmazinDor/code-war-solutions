function isNarcissistic(n) {
    let howLong = n.toString().length
    //get a number 
    let myArr = String(n).split('').map((num) => { return Number(num) })

    newArr = myArr.map((num) => Math.pow(num, howLong)).reduce((acc, curr) => acc + curr, 0)

    if (newArr == n) {
        return true
    } else {
        return false
    }


}