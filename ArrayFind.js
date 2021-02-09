/*  
 Array Find()
 The find() method returns the value of the first array element that passes a test function.

*/

var numbers = [4,1,8,7,9,8,5,6,6,1,2,3,4,5,6,7,8,9];

var first = numbers.find(search)

function search(value, index, array) {
    return value > 2;
}

console.log(first)