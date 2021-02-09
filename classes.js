/*  
 Js Classes
*/

// Syntex
class Car {
    constructor (name, model, year)
    {
        this.name = name;
        this.model = model;
        this.year = year;
    }
}

let carSalonYerevan = new Car("Ford", "sedan", "2021");
let carSalonShushi = new Car("Bently", "cupe", "2020");

console.log(carSalonYerevan.name, carSalonYerevan.year);
console.log(carSalonShushi.name, carSalonShushi.year);