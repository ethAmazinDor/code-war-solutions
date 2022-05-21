

function flattenAndSort(array) {


    let sortedArr = array.reduce((acc, curr) => acc.concat(curr), [])

    return sortedArr.sort((a, b) => a - b)


}