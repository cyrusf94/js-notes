/* 
    ? IO & Callbacks
    * Process
        * an event that runs in the foreground or background on
        your machine
    * Node.js allows access to its process via a process object
    * this allows us to process external input and internal
    output (IO)
    * We do this by using process.stdin and process.stdout
*/

let process = require("process");

console.log(`This is an output from Node. Process PID: ${process.pid}`);


process.stdin.once("data", (input) => {
    console.log(`this is out input repeated: ${input.toString()}`)
});

/* 
    * .once() is an event listner. it listens for data event
        * it takes event
        * and callback function
        * callback is a function that is triggered when an event
        occurs
*/

function handleInput(input) {
    console.log(input.toString())
}

// .on() method allows continuous listen to a data stream
process.stdin.on("data", handleInputStdOut);
// (1)  (2)   (3)  (4)      (5)
/* 
    * 1. Nodes process interface
    * 2. Input data stream
    * 3. event listner method
    * 4. event we're lsitening for
    * 5. callback fx which runs when the event occurs
*/

function handleInputStdOut(input) {
    process.stdout.write(`The name is: ${input.toString().trim()}`)
};

// ? Readline

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout})

rl.question("what is your name?", (input) => {
    if (input.trim() == "Enoch") {
        // creates an output
        rl.setPrompt(`Hello, ${input}`)
        // generates output
        rl.prompt()
        // closes the socket
        rl.close()
    } else {
        rl.setPrompt(`Your name is ${input}`)
        rl.prompt()
        rl.close()
    }
})