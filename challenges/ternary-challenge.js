function ageCheck (age) {

    age < 18 ? console.log("you are a child still")
    : age >= 18 && age <= 20 ? console.log("you can travel but not drink")
    : age >= 21 ? console.log("you are allowed to drink and travel")
    : console.log("that isnt an age");
}
ageCheck(22);