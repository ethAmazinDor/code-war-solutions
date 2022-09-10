//return the total figure the individual will receive 
//prefix with pound sign 

function bonusTime(salary, bonus) {
    //create a varaible to hold the total compensation 
    let totalComp = ``

    //condintioal to check if the bonus is true multiply by 10
    if (bonus) {
        let totalComp = salary * 10
        return `\u00A3${totalComp}`
    } else {
        return `\u00A3${salary}`
    }
    // if not keep the same 
}