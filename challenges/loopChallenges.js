
//for loop challenge

for (let i = 2; i > -100; i = i - 4){
    console.log(i);
}

//for in challenge

let animalArray = ["pig", "cat", "mouse", "dog", "bird"];
let animalNoise = ["oink", "meow", "squeek", "bark", "chirp"];
let noiseIndex = 0;
for (i in animalArray) {
    console.log(`${animalArray[i]} ${animalNoise[noiseIndex]}`)
    noiseIndex = noiseIndex + 1;

}

for (animal in animalArray) {

    animalArray[animal] == "pig" 
    ? console.log("oink")
    : animalArray[animal] == "cat" 
    ? console.log("meow")
    : animalArray[animal] == "mouse" 
    ? console.log("squeek")
    : animalArray[animal] == "dog" 
    ? console.log("bark")
    : animalArray[animal] == "bird" 
    ? console.log("chirp")
    : null;
}