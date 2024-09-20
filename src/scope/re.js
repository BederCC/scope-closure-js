// Reasignación: En JavaScript, la reasignación se refiere a cambiar el valor de una variable después de que ha sido inicialmente declarada.
// Redeclaración: La redeclaración se refiere a declarar una variable que ya ha sido declarada antes. En JavaScript, esto es posible con var, pero no con let y const.

var firstName;// undefined
firstName = 'Beder';
console.log(firstName);// Beder

var lastName = 'Jesús'; // declaración y asignación
lastName = 'Benitez'; // reasignación
console.log(lastName);

var secondName = 'Javier';// declaración y asignación
var secondName = 'Juan';// redeclaración
console.log(secondName);

let fruit = 'apple';// declaración y asignación
fruit = 'banana';// reasignación
console.log(fruit);

//no se puede redeclarar una variable con let 
//let fruit =  'kiwi';  //error: SyntaxError: Identifier 'fruit' has already been declared

// const
const animal = 'dog';// declaración y asignación
// no se puede reasignar una variable con const
animal = 'cat';// reasignación
console.log(animal); //error: TypeError: Assignment to constant variable.


//un arreglo con const se puede modificar
const vehicle = [];
vehicle.push('car');
console.log(vehicle); // ['car']

vehicle.pop();
console.log(vehicle); // []