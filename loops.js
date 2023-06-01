/* 
    ? Loops
    * allow us to repeatr a block of code repeatedly
    *they stop once an exit condition has been met
*/

/*  
    ? For Loop
    * iterates over any data type thats iterable
    * iterator = placeholder value
    * iterable = data type we can count through
    
    syntax

    for (start; stop; step)
*/

for ( let i = 0; i <= 10; i = i + 1) {
    console.log(i);
}

let longWordEN = "supercalifragilistiexexpialidocious";
console.log(longWordEN.length)

for (let count = 0; count < longWordEN.length; count = count +1) {
    console.log(`Index: ${count}, Letter ${longWordEN[count]}`)
}

/* 
    ? For-in Loop
    *allows us to seek an index value of an interable
    * for-in does not require an index number
    * for-in does not require a stop statement
*/

let longWordDE = "sdfsagsdfhgshgfdg"
for (i in longWordDE) {
    console.log(i);
}

/* 
    ? For-of Loop
    *allows us to seek iterable value against a condition
*/

let longWordPL = "fsddddddddfwefdfsdfewf";

for (i of longWordPL) {
    console.log(i);
}

/* 
    difference between for-in and for-of in terms of use
    * for in allows us to loop over items that are not an array
    * for-of only works if an item is indexed linked an array
    or string
*/

/* 
    ? While Loop
    * executes a statement inside of a code block
    * it does so as long as a while condition evaluates to true
    
    syntax:

    while (true) {
        do this until false
    }
*/

let loopCount = 0;

while (loopCount <=10) {
    console.log(loopCount);
    loopCount = loopCount + 1;
}

/* 
    ? Do while loop
    * executes code in the do section while a condition remains 
    true
*/

let doCount = 0;

do {
    console.log(doCount);
    doCount++
} while (doCount <= 10);

console.log("FIzzBuzz Challenge")

// FizzBuzz Challenge!
/*
    Create a function that takes a parameters called start and stop.
    Loop over numbers from start to stop
    If the number is divisible by 3, print "Fizz"
    If the number is divisible by 5, print "Buzz"
    If the number is divisible by 3 and 5, print "Fizz Buzz"
    If the number is not divisible, print the number only
    Invoke your function to make sure it works.
*/
let fizzBuzz = function(start, stop){
let fizzArr = [];
for (let count = start; count <= stop; count++ ) {
    if ((count % 3 == 0) && (count % 5 == 0)) {
        fizzArr.push("Fizz Buzz");
    } else if (count % 3 == 0) {
        fizzArr.push("Fizz");
    } else if (count % 5 == 0) {
        fizzArr.push("Buzz");
    } else {
        fizzArr.push(count);
    }
}
return fizzArr; 
}

console.log(fizzBuzz(10, 50));
// Reverse Words in a String

/* 
    Write a function that takes a string as input and returns the same string with the order of words reversed.

    For example, if the input string is "Hello World!", the function should return "!World Hello".

    Your task is to implement the reverseWords function and test it with different inputs.
*/
/*
let stringReverse = function (str) {
    let newString = [];
    if (typeof str == 'string') {
        for (let i = str.length - 1; i >= 0; i--) {  
            newString.push(str[i]);
        }
        return newString.join('');
    } else {
        return null;
    }
}
*/
let stringReverse = function (str) {
    let newString = "";
    if (typeof str == 'string') {
        for (let i = str.length - 1; i >= 0; i--) {  
            newString += str[i];
        }
        return newString;
    } else {
        return null;
    }
}


console.log(stringReverse("Hello World"));