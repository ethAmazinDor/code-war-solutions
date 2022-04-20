/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/

function switchItUp(number) {
    switch (number) {
        case 0:
            return 'Zero'
            break;
        case 1:
            return "One"
            break;
        case 2:
            return 'Two'
            break;
        case 3:
            return 'Three'
            break;
        case 4:
            return 'Four'
            break;
        case 5:
            return "Five"
            break;
        case 6:
            return 'Six'
            break;
        case 7:
            return 'Seven'
            break;
        case 8:
            return 'Eight'
            break;
        case 9:
            return 'Nine'
            break;
    }

    return number


}

/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

function hoopCount(n) {
    //your code goes here    

    if (n >= 10) {
        return 'Great, now move on to tricks'
    } else {
        return 'Keep at it until you get it'
    }
}



/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {

    let bmi = weight / Math.pow(height, 2)

    if (bmi <= 18.5) {
        return 'Underweight'
    } else if (bmi <= 25.0) {
        return 'Normal'
    } else if (bmi <= 30.0) {
        return 'Overweight'
    } else {
        return 'Obese'
    }

}


/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/
const reverseSeq = n => {
    let answer = []


    for (let i = n; i > 0; i--) {
        answer.push(i)
    }

    return answer
}


//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    // your code........

    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}

//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
    return x.split(' ').join('')
}


//Merge two sorted arrays into one 
function mergeArrays(arr1, arr2) {
    //take two sorted arrays 
    //merge them together into one single array
    let mergedArray = arr1.concat(arr2)

    const unique = [...new Set(mergedArray)]


    //sort the array in asencding order 
    return unique.sort((a, b) => a - b)
}


//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
    //getting an integer array
    return array.map((num) => {
        if (Math.sqrt(num) % 1 === 0) {
            return Math.sqrt(num)
        } else {
            return Math.pow(num, 2)
        }

    })
    //returning a new array if number has a square root, print otherwise sqare the numbe
}


//A Needle in the Haystack
function findNeedle(haystack) {
    // take in an array 
    return 'found needle in position ' + haystack.indexOf('needle')
    //look through the array for the word 'needle'

    //return the needle and the position it's in 
}


//Convert number to reversed array of digits
function digitize(n) {
    //code here

    return n.reverse()
}

