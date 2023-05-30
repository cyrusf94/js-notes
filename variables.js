/* 
    ? Variables
    * containers that store data in memory
    * declaration
        * allows memory space to be reserved 
        * starts with let, var, or const
        * cannot start with a number or characters other than $
        or _
    *initialization
        * assignment of data value
        * if no value is assinged , it's undefined by default
        * can be any value or data type  (str, int, arr, fx, class, ect.)
        * can be reassigned (except for const)   
*/

// Variable Declaration
let firstName;

// Variable Initialization (and reassignment)
firstName = "Paul";
console.log(firstName);

// Variable Decloration and Initialization 
let LastName = "Niemczyk";

// (a)  (b)  (c)        (d)
let address = "123 Main St, Salem, MA";
    // (e)    (f)

// (a) - keyword
// (b) - variable identifier
// (c) - assignment operator
// (d) - value or initializer
// (e) - variable declaration
// (f) - variable initilization or value assignment

var age = 26;
console.log(age);
// var is hoisted whereas let or const are not
//do not use it. OLD

// ?const variable CANNOT have a reassigned primitive value
const ssn = "123-45-6789";
console.log(ssn);

const arr = ["chicken", "ice cream", "cereal"];
arr[3] = "potato";

console.log(arr);

/* 
    ? Coding Practices for variables
    * be concise (ex: firstName instead of usersFirstName)
    * be specific (ex: vaulue instead of i)
    * utilize camelCase (most popular JS)
    * snake_case
    * PascelCase
    * 
*/

function addressEntry(fName, lName, houseNumber, street, city, state, postCode) {

    const addressStamp = `${fName} ${lName} \n ${houseNumber} ${street} \n ${city}, ${state.toUpperCase()} ${postCode}`;
    const stampArr = [fName, lName, houseNumber, street, city, state, postCode];
    
    console.log(addressStamp);
}

addressEntry("Cyrus", "Fullam", "40", "pleasant st", "Randolph", "vt", "05060");
