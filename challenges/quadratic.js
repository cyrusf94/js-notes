/* 
    ? Challenge
    * Create a function that will give you a result of a quadratic formula based on all of the necessary factors
    * Check if the data type is Number. If not, return, "please use whole numbers only"
    * Please return the result but also the value of the top and bottom separately
    
    -b+-sqrt(b**2 -4ac)/2a
*/






function quadraticFormula(a, b, c) {
    
    if (typeof a == 'number'  && typeof b == `number` && typeof c == `number`) {
        let formula = (`-${b}+-sqrt((${b}**2)-4(${a}*${c}))/(2*${a})`);
        return formula;
    } else {
        return "Please use whole numbers only";
    }
}

console.log(quadraticFormula(2, 10, 15));

/* 
    ? Pythagoream Theorem Challenge
    * right triangle has three sides
    * the longest side c is calculated by taking the sum of:
    * a**2 and b**2
    * the formula is as follows c = sqrt(a**2 + b**2)
    * Create a function expression that takes two triangles sides
    * return the hypotenuse (c side)
    * hint: Math object has a .sqrt() method
    ! 37 ish
    
*/

let pythagoreamTheorem = function(a, b) {
    if (typeof a == 'number' && a > 0  && typeof b == 'number' && b > 0) {
    let c = Math.sqrt((a**2) + (b**2));
        return `c = ${c}`;
    } else {
        return "I need positive numbers"
    }
}

console.log(pythagoreamTheorem(2, 20));