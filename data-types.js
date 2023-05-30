// javascript 
//weakly typed or duck typed
// client-side langauge (runs in the browser)
// interpreted langauge, not compiled
// first-class-function - functions are treated like any other variables
//functional langauge 
//object oriented langauge 
//prototype-based
//imperitive
//ECMA Script - organization setting langauge standars



/* 
?comments
* bkocks of code that are not being interpreted
* denoted by // for single line
*denoted by /* for multi line
*helps students with note taking
*helps devs to document their code
 */

/* 
    ? console object
    *gives access to the browser or node's debugging console
    *allows developers to view output from their programs
*/
console.log(2 + 2);

/* 
    ? Data Types
    primitive:
    *string 
    *number
    *boolean
    *null
    *undefined
    *Not a Number (NaN)

    Reference:
    *array
    *object
    *set
*/

/* 
    ? Numbers
    *any integer or decimal
*/
console.log(25);
console.log(3.14);
console.log(typeof 1776);


/*
    ? Strings
    *primitive data type representing characters (text)
    *Enclosed by '', "", ``.

 */

console.log("this is text");

//We can add (concatenate) strings

console.log("Hi, i'm pauld" + " and im 24 years old");

//string index
console.log("Germany"[0]);
//starts at zero, not one

const str = ("hello");
console.log(str.length);

/* 
    ? String Interpolation
    *process of inlcuding space for an expression

    Syntax:
    `string ${ expression } string'

    */

    console.log(`my name is paul and i am ${20 + 4} years old`);
    console.log("my name is paul and i am ", 20 + 4, "years old");


/* 
    ? String Properties & Methods
    .length
    .slice()
        * returns a section of a string
        * takes optional start and stop parameters
    .toUpperCase()
        *returns new string with all chars uppercase
    .toLowerCase()
*/
console.log("kraftfahrzeug-hafoflicheversicherung".length);
console.log("Mr. Niemczyk".slice(4));
console.log("Mr. Niemczyk".slice(0, 3));
console.log("memorialday2023".toLocaleUpperCase());

/* 
    ? Booleans
    * true or false 
    * binary value (0 or 1)
    * examples of falsey values:
    * false
    * undefined
    * null
    * NaN
    * "" (empty string)
*/

console.log(true);
console.log(false);
console.log(2 == 2);
console.log(2 == 5);

// Boolean() object returns whether value is truthy or falsey
console.log(Boolean());
console.log(Boolean(""));

/* 
    ? Null & Undefined 
    * falsey values
    * Null - means nothing
    * undefined - default value 
*/
console.log("-----------------");
/* 
    ? Operators
    * addition (+)
    * substraction (-)
    * multiplication (*)
    * division (/)
    * exponent (**)
    * dot (.)
    * modulo (%)
    * assignment (=) (single)
    * comparison (==) (double)
    * strict comparison (===) (triple)
*/

//assignment 

let teacher = "paul";

// Comparison (==)

console.log(2 == "2");
console.log(2 === "2");

/* 
    ? Type coercion
    * JS is a weakly-typed programming langauge
    * doesn't require data type definition
    * comparison operator (==) performs type coercion before
    resolving expression
    *we can use strict equality (===) to avoid type coercion
*/

console.log(2 + "2");
/* 
    1. in order to satisfy the following expression
    2. js coerces number data type into string data type
    3.two strings are concatenated
*/
console.log(typeof (2 + "2"));


// ! know what type coercion is but DON'T  USE IT!

/* 
    ? Modulo (%)
    * Check for the remainder of long division
*/

console.log(12 % 3);

/* 
    ? Expressions
    * unprocessed values grouped using the ()
    * evaluated to be truthy or falsy
    * expressions evaluate
*/

console.log(Boolean(2 == 2));
console.log(Boolean("Paul" == "paul"));

/* 
    ? Statements
    * keyword
    * expression
    * code block
    * statements evaluate and execute bcode block when invoked
    
    Ex: conditional statement

    if (true) {
        run this code
        
    }
*/
console.log('number');