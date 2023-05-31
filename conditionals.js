/* 
    ? Conditionals & Logic Gates
    * conditional statements check if an expression is truthy
    * the expression must always reslove to true
    * if it's truthy, code block executes
    * if an expression is falsey, code block does not run
*/

/* 
    ? if statement
*/

let lightSwitch = true;

if (lightSwitch == true) {
    console.log("the light is on");

} else if (lightSwitch == false) {
    console.log("the light is off");
}


/* 
    ? else if statement
    * allows us to add additional expression to check for
    * executes when prior condition has not been satisfied
    
*/

/*let grade = 90;
//chained and exits when first condition is satisfied
if (grade >= 90) {
    console.log("you got an A");
} else if (grade >80) {
    console.log("you got a B");
}

//fire in sequence
if (grade > 80) {
    console.log("B");
}
if (grade > 81) {
    console.log("Another B");
}

/* 
    ? Else statement
    * if all else fails, execute this code
*/

if (lightSwitch == true) {
    console.log("the light is on");
} else if (!lightSwitch) {
    console.log("the lights are off");
} else {
    console.log("your power is off");
}

/* 
    ? Syntax

    if (conditionIsTrue) {
        execute this code block
    } else if (conditionIsTrue) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? Logical operators NOT AND OR
    * OR operator ( || )
        * true if one of the conditions is true
        * ex: I will be happy if i do the laundry or clean the house
        * (clean & laundry) == true
        * (clean or laundry) == true
        * (no clean or yes laundry) == true 
        * (yes clean or no laundry) == true
        * (no clean or no laundry) == false
    * AND operator ( && )
        * true if both conditions are true
    *NOT operator ( ! )
        * opposite of the logical expression
        * flips it
    */

let laundry = true;
let cleaning = true;

//AND example
if (laundry && cleaning) {
    console.log("I got all of my chores done");
}

// OR example
if (laundry || cleaning) {
    console.log("I got one of my tasks done");
}

// NOT example

if (laundry != true) {
    console.log("the laundry is not done");
}

/* 
    ? Ternaries
    * a quick way of creating if/else conditional
    * commonly used to check a flag
    * they work on expressions (they do not return values)
*/

let ignition = true;

if (ignition == true) {
    console.log("the car is on");
} else {
    console.log("the car is off");
}

ignition ? console.log("car is on") : console.log("car is off")
/* 
    ? Ternary Syntax

    conditional ? code block if true : code block if false
    ! you MUST have an else statment
*/

// Chaining Ternary

let season = 2;

if (season == 1) {
    console.log("spring");
} else if (season == 2) {
    console.log("summer");
} else if (season == 3) {
    console.log("autumn");
} else 

season == 1 ? console.log("spring")
    : season == 2 ? console.log("summer")
    : season == 3 ? console.log("fall")
    : season == 4 ? console.log("winter")
    : console.log(`${season} is not the appropriate input`);


/* 
    ? Switch statements
    * swtiches execute a block of code dependent upon a different
    case
    * we ask questions that require a specific response determined 
    by our answer
*/

let uprighInstructor = "Paul";

switch(uprighInstructor) {
    // infromation that cases are compared agaisnt 
    //executes code below
    case "Paul":
        console.log(`${uprighInstructor} is a Lead SD Instructor`);
        break;
        //used to stop code below
    case "Rob":
        console.log(`${uprighInstructor} has dad jokes`);
        break;
    case "Henry":
        console.log(`${uprighInstructor} is a teaching assistant`);
        break;
    default:
        //equivalent of an else statment
        console.log(`${uprighInstructor} may or may not work here`);
}


function gradeCheck(grade) {

    switch (true) {
        case grade >= 89:
            console.log("You got an A!");
            break;
        case grade >= 79:
            console.log("you got a B!");
            break;
        case grade >= 66:
            console.log("you got a C!");
            break;
        case grade >= 59:
            console.log("you got a D!");
            break;
        default:
            console.log("You Failed!");
    }

}

gradeCheck(90);