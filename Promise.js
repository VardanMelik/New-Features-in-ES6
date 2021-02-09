/* Promise  */

let myPromise = new Promise( (resoleve, reject) => {
    // 
    console.log('Promise');
    resoleve(); // when successful
    reject(); // when error

});

myPromise.then(
    (value) => { console.log('Succcess')},
    (eror) => { console.log('Error')}

)

let testPromise = new Promise( (resolve, reject) => {
    setTimeout( () => { resolve('ES6 Promise !')}, 3000);
})

testPromise.then( (value) => {
    console.log(value);
})