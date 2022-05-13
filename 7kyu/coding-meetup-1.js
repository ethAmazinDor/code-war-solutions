function countDevelopers(list) {
    // your awesome code here :)

    let Found = 0

    for (let i = 0; i < list.length; i++) {
        if (list[i].language === 'JavaScript' && list[i].continent === 'Europe') {
            Found++
        }
    }

    return Found

}