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

    let myFunc = n => Number(n)

    let reversedNums = Array.from(String(n), myFunc)

    return reversedNums.reverse()

}

//Sum Mixed Array
function sumMix(x) {
    //take in an array of integers of strings and numbers 
    let newArr = x.map(n => Number(n))
    //return sum of array 

    return newArr.reduce((acc, c) => acc + c, 0)
}

//Count the Monkeys!
function monkeyCount(n) {
    //populate an array with numbers
    let fullNum = []

    //for loop goes through the number and increments up to it
    for (let i = 1; i <= n; i++) {
        //pushing the numbers into the fullNum array 
        fullNum.push(i)
    }
    return fullNum
}

//you only need one - beginner
function check(a, x) {
    //take in an array with a value 
    // check wheter the array contains x 

    return a.includes(x)
    //return true if it does vice versa 
}

//Well of Ideas 
function well(x) {
    let good = 0

    for (let i = 0; i < x.length; ++i)
        if (x[i] == 'good' && ++good > 2)
            return 'I smell a series!'

    return good ? 'Publish!' : 'Fail'

}

//Square(n)sum
function squareSum(numbers) {
    //take in an array of numbers 

    let squaredNums = numbers.map(num => Math.pow(num, 2))
    // square each number

    return squaredNums.reduce((sum, current) => sum + current, 0)
    //add the sum of the squared numbers together 

}

//fake binary 
function fakeBin(x) {
    //take in a string of digits 
    let newArr = x.split('')
    //replace any digits below 5 with 0

    return newArr.map(num => {
        if (num < 5) {
            return '0'
        } else {
            return '1'
        }
    }).join('')
    //replace any digit above 5 with 1 

}

//sum of two lowest positives
function sumTwoSmallestNumbers(numbers) {
    //take in an array 
    numbers = numbers.sort((a, b) => a - b, 0)

    return numbers[0] + numbers[1]

}

//Printer Errors 
function printerError(s) {
    //a place to store the number of errors 
    let errors = 0;

    //iterate over the string 
    for (let i = 0; i < s.length; i++) {
        const currentLetter = s[i]
        //if current letter is not within the range of a-m
        if (currentLetter < 'a' || currentLetter > 'm') {
            //increment error count 
            errors++;
        }
    }
    console.log(`${errors}/${s.length}`)

    //return the errors 
}

//Highest and Lowest 
function highAndLow(numbers) {
    let strArr = numbers.split(' ')

    //sort the string from lowest to highest 
    sortedArr = strArr.sort((a, b) => a - b, 0)
    // return the lwest and highest number with the higesht being the first 
    return `${sortedArr[sortedArr.length - 1]} ${sortedArr[0]}`
}

//Will you make it ?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let amountOfGallon = mpg * fuelLeft

    if (amountOfGallon >= distanceToPump) {
        return true
    } else {
        return false
    }
};