function keysAndValues(data) {
    let keyArr = []
    let valueArr = []


    for (let value of Object.value(data)) {
        valueArr.push(value)
    }

    for (let key of Object.keys(data)) {
        keyArr.push(key)
    }

    return [keyArr, valueArr]

}