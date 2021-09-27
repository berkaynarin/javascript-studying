/* const numArray = [1, 4, -2, -3];
var sumOfNum = 0;

numArray.map(eachItem => {
    sumOfNum += eachItem;
})

console.log(sumOfNum); */

//-------------------------------------Bonus Challenge-----------------------------

const arrayNum = [
    [1, 4],
    [-2, 8],
    [6, 3]
]

function calculateSum(numArray){
    var input = window.prompt("If you want to get the sum of any column please type 1, if it's a row type anything else")
    var sum = 0;
    if(input == 1) {
        var column = window.prompt("Which column?")
        for (let i = 0; i < numArray.length; i++) { //It will iterate number of rows times to calculate for columns 
            sum += numArray[i][column - 1] // Because people starts counting from one
        }
    }
    else {
        var row = window.prompt("Which row?")
        for (let i = 0; i < numArray[0].length; i++) { //It will iterate number of columns times to calculate for rows
            sum += numArray[row - 1][i] // Because people starts counting from one
        }
    }

    alert("The summation is: " + sum);
}

calculateSum(arrayNum);