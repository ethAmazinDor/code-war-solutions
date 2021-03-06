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

//vowel count 
function getCount(str) {
    //a place to store the count of vowels 

    let vowels = 0

    //iterate over the string 
    for (let i = 0; i < str.length; i++) {
        const vowelLetter = str[i]
        //if letter is a vowel store it in count
        if (vowelLetter === 'a' ||
            vowelLetter === 'i' ||
            vowelLetter === 'e' ||
            vowelLetter === 'o' ||
            vowelLetter === 'u') {
            vowels++
        }

    }
    return vowels;
    //return count 
}


//l1: set alarm 
function setAlarm(employed, vacation) {

    if (employed == true && vacation == false) {
        return true
    } else {
        return false
    }
}

//volume of a cuboid 
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}

//Grasshopper- check for factor 
function checkForFactor(base, factor) {
    return base % factor === 0
}

//beginner series #4 Cockroach
function cockroachSpeed(s) {
    //Good Luck!
    let cmph = s * 27.7778

    return Math.floor(cmph)
}

//square every digit 
function squareDigits(num) {

    //convert num to a string
    num = num.toString().split('')
    //square each number 
    squaredNum = num.map(x => Math.pow(x, 2)).join('')
    //return the squared number 
    return Number(squaredNum)
}

//descending order 
function descendingOrder(n) {
    //convert number into a string 
    let newArr = n.toString().split('')

    //sort the string 

    return Number(newArr.sort((a, z) => z - a).join(''))

}

//reverse string 
function solution(str) {
    //take in a string and reverse it

    return str.split('').reverse().join('')

}

//shortest word 
function findShort(s) {
    let words = s.split(' ')

    let shortest = words.reduce((shortWord, currentWord) => {
        if (currentWord.length < shortWord.length) {
            return currentWord
        } else {
            return shortWord
        }
    }, words[0])

    return shortest.length
    //iterate over the string 
    //get the length of 

}


//all star coding challenge 
function strCount(str, letter) {
    //place to store count of letters 
    let count = 0;
    //iterate over the string 
    for (let i = 0; i < str.length; i++) {
        // check the string for how many times letter shows up 
        if (str[i] === letter) {
            count++
        }
    }
    return count

    //return the count 
}

//SUM OF TWO LOWEST POSITIVE INTEGERS
function sumTwoSmallestNumbers(numbers) {
    //sort the array from smallest to largest 
    let sortedArr = numbers.sort((a, b) => a - b)
    // add the first two elements in the array 
    return sortedArr[0] + sortedArr[1]
}

//FRIEND OR FOE 
function friend(friends) {
    let friendsArr = []
    //iterate thorugh the string 
    for (let i = 0; i < friends.length; i++) {
        const friendsName = friends[i]
        //if friends name length is 4 return it in the array 
        if (friendsName.length === 4) {
            friendsArr.push(friendsName)
        }
    }
    return friendsArr
}

//STUDENTS FINAL GRADE 
function finalGrade(exam, projects) {
    //store the final grade 
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}

//KEEP HYDRATED
function litres(time) {
    let nathan = time * 0.5

    return Math.floor(nathan)

}

//MAKE A FUNCTION THAT DOES ARITHMETIC
function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
    }
}

//SORT ARRAY BY STRING LENGTH
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
};

//SUM THE STRINGS
function sumStr(a, b) {
    let number1 = Number(a)
    let number2 = Number(b)

    return (number1 + number2).toString()

}

//MESSI GOALS FUNCTION
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

//LIST FILTERING 
function filter_list(arrs) {
    //iterate through the array 
    let newArr = []
    //get rid of any strings into the array 
    for (let i = 0; i < arrs.length; i++) {
        numbers = arrs[i]
        //return a new array without any strings
        if (numbers !== '') {
            newArr.push[i]
        }
    }
    return newArr
}

//CREDIT CARD MASK
function maskify(cc) {
    //iterate through the string 

    cc = cc.split('')
    //replace all the characters/nubmers with a # exepct the last 4 digits
    for (let i = 0; i < cc.length - 4; i++) {
        cc[i] = '#'
    }
    cc = cc.join('')

    return cc

}

//CONVERT STRING TO A NUMBER 
var stringToNumber = function (str) {
    return Number(str)
}

//STRING REPEAT 
function repeatStr(n, s) {
    return s.repeat(n)

}

//MONEY MONEY MONEY 
function calculateYears(principal, interest, tax, desired) {
    //an inital sum of money 
    let years = 0

    while (principal < desired) {
        principal += (principal * interest) * (1 - tax)
        years++
    }

    return years

}


//List Filtering 
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(str => str !== str.toString())
}

//Difference of volumes of cuboids 
function findDifference(a, b) {
    let volumeA = a.reduce((sum, current) => sum * current, 1)
    let volumeB = b.reduce((sum, current) => sum * current, 1)
    let difference = (volumeA - volumeB)

    return Math.abs(difference)


}

function findDifference(a, b) {
    return Math.abs(a.reduce((sum, current) => sum * current, 1) - b.reduce((sum, current) => sum * current, 1))

}

//String ends with ?
function solution(str, ending) {
    return str.endsWith(ending)
}

//Exes and Ohs
function XO(str) {
    //iterate thorugh the string 

    let xCounter = 0
    let yCounter = 0
    //determine if x's and o's are the same amount 

    for (let i = 0; i < str.length; i++) {
        const counter = str[i].toLowerCase()

        if (counter === 'x') {
            xCounter++
        } else if (counter === 'o') {
            yCounter++
        }
    }

    if (xCounter === yCounter) {
        return true
    } else {
        return false
    }
}

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//Categorize New Member 
function openOrSenior(data) {
    // get an array of ages and handicaps 
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
    //look through that array and determine 
}


//REVERSE WORDS 
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

//HIGHEST PROFIT WINS
function minMax(arr) {
    let newArr = []

    return [Math.min(...arr), Math.max(...arr)

}

//COUNT OF POSITIVES & SUM OF NEGATIVES
function countPositivesSumNegatives(input) {
    var newArr = [];
    var positiveNumber = 0;
    var negativeNumber = 0;

    // Validate Input
    if (input === null || input.length === 0)
        return newArr;

    // Loop through array of Numbers 
    for (var i = 0; i < input.length; i++) {
        if (input[i] == 0)
            continue;

        // Count positives
        else if (input[i] > 0)
            positiveNumber++;

        // Sum negatives
        else if (input[i] < 0)
            negativeNumber += input[i];

    }

    // Prepare Output
    newArr.push(positiveNumber);
    newArr.push(negativeNumber);

    return newArr;
}

//TRANSPORTATION ON VACATION
function rentalCarCost(d) {
    let rate = d * 40

    if (d >= 3 && d < 7) {
        return rate - 20
    } else if (d >= 7) {
        return rate - 50
    } else {
        return rate
    }
}

//IS HE GONNA SURVIVE ???
function hero(bullets, dragons) {
    //each dragon dies with two bullets 
    return bullets >= dragons * 2

    //check wheter the hero has enough bullets 

}

//WILL THERE BE ENOUGH SPACE ?
function enough(cap, on, wait) {
    let pass = on + wait

    if (pass > cap) {
        return pass - cap
    } else {
        return '0'
    }
}

