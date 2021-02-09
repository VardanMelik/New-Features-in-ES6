/* JS let keyword
*  The let keyword allows you to declare a variable with block scope.
*/
var x = 10;
// Here x is 10
console.log('Before scope', x);

{
    let x = 2;
    console.log('In scope', x);
    // Here x is 2
}
console.log('After scope', x);

// Here x is 10