//To read input from console
const readline = require("readline");

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Type the last number you want to see even numbers to: ", function(ans){
    for(let i = 1; i < ans; i++) {
        i % 2 === 0 && console.log(i)
    }
}) 

//To read input from window object
/* var input = window.prompt("How for would you want to know even numbers, please type the last number");

for(let number=1; number<=input; number++) {
    number % 2 === 1 && console.log(number);
} */