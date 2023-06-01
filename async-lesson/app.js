/* 
    ? Promises
    * an object that may produce a singular value in the future
    * Three States
        * pending (unfinished)
        * fulfilled (complete with result)
        * rejected (error)
    * allow code to execute without having to wait for its
    completion
*/

let myPromise = new Promise((resolve, reject) => {
    let sum = 1 + 2;
    sum == 3 ? resolve("Success") : reject("Failed");


    //pending promise example
    setTimeout(() => {
        sum == 3 ? resolve("sucess") : reject("Failed")
    }, 4000)
})

// Returns a promise. it does not allow us to see information
console.log(myPromise); 

// In order to get tangible data out of a Promise object,
// we must resolve it

myPromise
    .then(msg => console.log(msg))
    // resolver that executes a function when promise has 
    // been fufilled
    .catch(msg => console.log(`Error, ${msg}`))
    // executes a fx when a promise has been rejected (error handling)
    .finally(() => console.log("This code runs after promise is done"));
    // runs ONLY once the promise has been completed

/* 
    ? Asynchronous Functions
    * introduced in ES7
    * alternative to writing promises
    * a function that returns a promise object
    * allows us to resolve or reject a promise
    
    Syntax:
    * async function myFx() {}
    * const myFx = async function() {}
    * const myFx = async () => {}
*/

function getData() {
    setTimeout(() => {
        return "some data"
    }, 3000)
}

let data = getData()
console.log(data);
//returns undefined because return statement happens 3s after
//invocation

async function asyncFunction() {
    return "Async function value";
}
// Returns a promise that must be resolved
console.log(asyncFunction);

asyncFunction().then(result => console.log(result));

// ? how can we use the result of a promise object in another function?

/* 
    ? Await Keyword
    * can be utilized only inside of asynchronous functions
*/

function first() {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve("Promise resolved"), 3000)
        } else {
            reject("promise rejected")
        }
    })
}

async function pepTalk() {
    let result = await first()
    console.log(result);
    console.log("code after the promise");
}
console.log("code after peptalk function");
pepTalk();