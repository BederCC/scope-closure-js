// variables

var a; // declarando la variable
var b = 2; // declarando y asignamos o inicializamos la variable
b = 3; // reasignando la variable
var a = 30; // redeclarando la variable

// Global scope
//Cualquier variable en el documento pasara a ser variable global.
var fruit = 'apple'; // global scope

function bestFruit() {
    console.log(fruit);
}

bestFruit(); // apple

function countries() {
    country = 'Peru'; // al no poner var, let o const se convierte en una variable global
    console.log(country);
}

countries(); // Peru
console.log(country); // Peru