// El "block scope" en JavaScript se refiere al alcance que tienen las variables declaradas dentro de un bloque de código. Un bloque de código en JavaScript puede ser cualquier cosa entre llaves {} como un bucle for, una sentencia if, una función, etc.

// Las variables declaradas con let y const en JavaScript tienen un alcance de bloque. Esto significa que solo son accesibles dentro del bloque en el que se declararon.

function fruits() {
    if (true){
        var fruit1 = 'apple';//(function scope)
        let fruit2 = 'banana';//(block scope)
        const fruit3 = 'kiwi';//(block scope)
    }
    console.log(fruit1);// apple 
    console.log(fruit2);// ReferenceError: fruit2 is not defined 
    console.log(fruit3);// ReferenceError: fruit3 is not defined 
}

fruits();