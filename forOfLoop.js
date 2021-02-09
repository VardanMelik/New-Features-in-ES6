/*
The For/Of Loop

The JavaScript for/of statement loops through the values of an iterable objects.

for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

*/
// Array
var cars = ["BMW", "Volvo", "Mini", "Eraz", "Hundai"];
var x;

for (x of cars) {
    console.log(x);
}

// Looping over a string

var text = "I'm trying to test ES6 for/of Looping over a string";
var x;

for(x of text) {
    //console.log(x);
    document.write(x + "<br>")
}
