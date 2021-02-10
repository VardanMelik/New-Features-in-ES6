/*

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is a JavaScript object that links producing code and consuming code

*/

/*let myPromise = new Promise( (myResolve, myReject) => {
    // Producing Code

    myResolve();
    myReject();
});

myPromise.then(
    (value) => { // success code},
    (error) => { // error code} 
)*/


/*
function myDisplay(some) {
    console.log(some);
}

let myPromise = new Promise( (myResolve, myReject) => {
    let x = 0;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    (value) => { myDisplay(value) },
    (error) => { myDisplay(error)}
)
*/

// Waiting for a Timeout
let myPromise = new Promise( (myResolve, myReject) => {
    setTimeout( () => { myResolve}, 3000 );
});

myPromise.then( (value) => {
    console.log(value);
} )

// Open file
let filePromise = new Promise( (myResolve, myReject) => {
    let req = new XMLHttpRequest();
    req.open('GET', "myCar.html");
    req.onload = () => {
        if (req.status == 200) {
            myResolve(req.response);
        } else {
            myReject('File not Found');
        }
    };
    req.send();
})

filePromise.then(
    (value) => {myDisplay(value)},
    (error) => { myDisplay(error)}
)
