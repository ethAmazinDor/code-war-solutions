function meeting(x) {
    //ceate a varabile to hold index 
    idx = x.indexOf('O')

    if (idx != -1) {
        return idx
    } else {
        return 'None available!'
    }

}