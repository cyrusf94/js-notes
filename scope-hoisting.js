/* 
    ? Scope
    * used to determine how information in different blocks of
    code can be accessed

    ? Five types of scope:
    * global/window
    * block
    * function
    * module
    * lexical
*/

/* 
    ? Global Scope
    * outermost scope
    * window object when in client 
    * js file when in node 
    * accessible from every other scope
*/

let globalScopeVar = "This is a global scope variable"

function x() {
    {{{{
        console.log(globalScopeVar);
    }}}}
}


/* 
    ? Function Scope 
    * accessible only inside of the funck=tion
*/

function scope() {
    let fxsv = "this is a fx scope variable"
}
scope()
//console.log(fxsv) // ReferenceError: fxsv is not defined

/*
    ? Block Scope
    * can be anywhere there are {}
 */

    if (true) {
        let bsv = "this is a block scope variable"
        console.log(bsv);
    }

/* 
    ? Lexical Scope
    * variables are accessible by their nested postion
    * inner fx scope can acess outer fx scope
*/

function outerFx() {
    //outer scope
    let ofxv = "outer scope variable";
    
    function innerFx() {
        //inner scope 
        let ifxv = "inner scope variable";
        console.log(ofxv);
        return ifxv;
    }
}

/* 
    ? Module Scope
    * ecapsulates objects nested inside of other modules or files
    * allows the user in other files
*/

const states = require("./states");
console.log(states);

/* 
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice
        * first, it looks for fx declarations and VARiables and
        hoists them
        * it allocates memory space to those declarations
        * then it executes the code line-by-line
*/


//console.log(myName); // ReferenceError
let myName = "Cyrus Fullam";
console.log(myName);

console.log(address); // runs, but shows undefined
var address = "123 main st";

// ? Functions Declarations ARE hoisted

displayName("cyrus")
function displayName(str) {
    console.log(`Hello ${str}`);
}
displayName("steve");

// ? Function Expressions ARE NOT hoisted

//capitalize("john"); // ReferenceError 
let capitalize = function(str) {
    console.log(str.toUpperCase());
}
capitalize("johm");

function run() {
    var foo = "foo";
    let bar = "bar";
    console.log(foo, bar);
    {
        var moo = "moo";
        let baz = "baz";
        console.log(moo, baz);
    }
    //console.log(baz); // ReferenceError: scope to block
    console.log(moo); // Worls: scoped to immediate function
}
run()

//global
{
    //block
    {
        //block
        var something = "this is something";
    }  
}
console.log(something);

// ! THIS IS BAD - don't use hoisting to your "benefit"