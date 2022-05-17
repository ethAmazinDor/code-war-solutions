function isValidWalk(walk) {

    let n = walk.filter((x) => x === 'n').length
    let s = walk.filter((x) => x === 's').length
    let w = walk.filter((x) => x === 'w').length
    let e = walk.filter(x => x === 'e').length
    if (walk.length != 10) {
        return false
    } else {
        if (n === s && e === w) {
            return true
        }
    }



}