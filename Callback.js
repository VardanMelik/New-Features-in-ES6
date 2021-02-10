/*function first() {
    myDsiplay('Hello')
}

function second() {
    myDsiplay('Goodbye')
}

function myDsiplay(value) {
    console.log(value)
}


second();
first();
*/


function myDisplay(some) {
    console.log(some)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum)
}

myCalculator(5,5, myDisplay)