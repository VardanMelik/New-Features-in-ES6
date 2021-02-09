/*  JS const
The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

Constants are similar to let variables, except that the value cannot be changed.
*/

var x = 10;
// Here x is 10
console.log('Before scope', x);

{
    const x = 2;
    // Here x is 2
    console.log('In scope', x);
}
// Here x is 10
console.log('After scope', x);