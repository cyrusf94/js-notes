/* 
    ? Functions
    * a block of reusable code
    * take in arguments through its parameters
    * perform an action
    * and return a result
    
    ? There are twos types of functions
    *function declaration
        *hoisted
    * function expression
        *not hoisted
    
    ? Functions
    * needs to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming through the parameter is called an argument 
    * can only have return statement value
    * if no return is provided, it defaults to undefined
    

    syntax 

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }

*/

// Function definition
function sayHello() {
    return "Hello May Cohort";
}
// Function invocation (calling)
sayHello();

let catchVariableFunction = sayHello();

/*
    ? Function Expression
    * utilizes a variable as a placeholder

    Syntax:

    let identifier = function(params) {
        code block
        return statement
    }
*/

let nameAge = function (name, age) {
    return `your name is ${name} and you're ${age} years old`
}

console.log(nameAge("cyrus", 28));


/* 
    ? Arrow Functions
    * introduced in ES6
    * concise way of writing functions
    * part of fx expression family
    * do not bind to .this or super (more on that in classes)
*/

/* 
    ? Concise Body Arrow Function
    * can have none or one parameter only
    * code block must not have {}
    * return statement must be implicit 
*/

let greetEveryone = () => 'hello everyone';

let greetDoctor = drName => `hello, Dr. ${drName}`;

console.log(greetDoctor("Dante"));

// ? Block Body Arrow Function

let concatenateString = (str1, str2) => {
    if (typeof str1 == "string" && typeof str2 == "string") {
        return str1 + str2;
    } else {
        return 'you can only pass string values as arguments';
    }
}

// ? Immediatly Invoked Function Expression (IIFE)

(function() {
    console.log("I'm an IIFE")
})()