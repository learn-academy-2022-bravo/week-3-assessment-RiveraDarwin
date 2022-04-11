// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacci", () => {
    it(" takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () =>{
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// ● fibonacci ›  takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
//ReferenceError: fibonacci is not defined




// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

const fibonacci = (num) => {
    let a; 
    let b;
    let arr1 = [0,1] 
    for (let i = 2; i <= num ; i++) {
    
     a = arr1[i - 1]
     b = arr1[i - 2]
     arr1.push(a + b)
    
    }
    return arr1.filter(value => value != 0)
  }

    console.log(fibonacci(6))
    console.log(fibonacci(3))

    // create a function that takes in a number and returns an array with numbers of the Fibonacci sequence
    // create an empty array with the first 2 values of the fibonacci which is 0 and 1
    // declare 2 variables a and b.
    // Iterate through using a for loop (let i = 2; i <= num ; i++)
    // Set the values to a = array[i - 1] and b = array[i - 2]
    // Now using .push I will push a+b into my array
    // output is correct but includes a 0 which is not expected and fails my test
    // Use .filter to return a new array, on value where value != 0 
    // Test Pass 

 
 
// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("sortIt", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () =>{
        expect(sortIt(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortIt(fullArr2)).toEqual([-823, 7, 23])
    })
})



// b) Create the function that makes the test pass.


const sortIt = (array) => {
  return array.filter(value => typeof value === "number" && value %2 !== 0).sort((a, b) => a - b)
}
console.log(sortIt(fullArr1))
console.log(sortIt(fullArr2))

// create a function that takes in a array and returns an array of only odd numbers sorted from least to greatest
    // Use .filter to take my array and return a filtered sibset of the array
    // Filter on value where typeOf value is equal to a number AND value %2 != 0 
    // Now that my cases for number and odd are covered sorting from least to greatest is next
    // Using .sort() I want to compare a,b in my array where b will be subtracted from a
    // The difference will determine the greater number and arrange my values in order from least to greatest. 
    // output is correct
    // Test Pass 

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulatingSum", () => {
    it(" takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () =>{
        expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })
})
const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []




// b) Create the function that makes the test pass.

const accumulatingSum = (array) => {
    //return array.map(value => value += value)
    return array.map((value, index) => array.slice(0,index + 1).reduce((a, b) => a + b))
}

console.log(accumulatingSum(numbersToAdd1))
console.log(accumulatingSum(numbersToAdd2))
console.log(accumulatingSum(numbersToAdd3))

//Create a function that takes in an array and returns an array of the accumulating sum.
// An empty array would return an empty array use .map returns array of same length.
// Use .map (value, index )to take my array and return an array of the same length
    // using .slice I slice from 0, index plus 1. 
    // Now I use .reduce to add the values of my array from left to right.
    // output is correct
    // Test Pass 