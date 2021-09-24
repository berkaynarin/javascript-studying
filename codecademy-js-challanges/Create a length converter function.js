function lengthConverter(isMile, input) {
    let output;
    if(isMile === "1") { // Check as string because window.prompt storing elements as string
        output = input * 1.6; // If the input is in mile
    }
    else {
        output = input / 1.6 // If the input is in kilometer
    }

    return output;
}

var isMile = window.prompt("If your length is in mile please type 1, otherwise type anything else");
var windowInput = window.prompt("Please enter your amount of length");

var output = lengthConverter(isMile, windowInput)
var typeOfLength = (isMile === "1" ? "kilometers" : "miles");

alert("The converted length is " + output + " " + typeOfLength);