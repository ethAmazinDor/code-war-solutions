function save(sizes, hd) {
    let total = 0
    let count = 0

    for (let file of sizes) {
        if ((total + file) <= hd) {
            total += file
            count++
        } else {
            return count
        }
    }

    return count

}