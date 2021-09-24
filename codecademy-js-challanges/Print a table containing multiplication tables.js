var numArray = [];
var str = "";

//Log the numbers as a string because otherwise it doesn't stand in one line
//Clear the numArray after every iteration because otherwise it dublicates the numbers in every line
for(let i = 0; i<=10; i++){
    str = numArray.join(' ');
    console.log(str)
    numArray = [];
    for(let j = 0; j<=10; j++){
        numArray.push(i*j);
    }
}