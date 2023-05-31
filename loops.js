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

for (let count = 1; count <= 100; count++ ) {
    
    if ((count % 3 == 0) && (count % 5 == 0)) {
        console.log("Fizz Buzz");
    } else if (count % 3 == 0) {
        console.log("Fizz");
    } else if (count % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(count);
    }
}