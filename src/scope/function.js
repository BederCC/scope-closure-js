function greeting(){
    // declaracion de variable local
    let userName = 'Juan';
    console.log(userName);
    // Solo se puede acceder a userName dentro de la funcion greeting
    if (userName === 'Juan'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();

//No se puede acceder a userName fuera de la funcion greeting
console.log(userName); // ReferenceError: userName is not defined