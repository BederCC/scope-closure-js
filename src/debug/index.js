// El `debugger` es una declaración en JavaScript que crea un punto de interrupción en el código. Cuando el navegador encuentra esta declaración y la consola de desarrollo está abierta, la ejecución del código JavaScript se detiene. Esto permite al desarrollador inspeccionar el estado actual de las variables, la pila de llamadas, y controlar la ejecución del código paso a paso.
// En resumen, `debugger` es una herramienta muy útil para encontrar y solucionar problemas en el código JavaScript.
var a = 'Hello';

function hello() {
    let b = 'Hello World';
    const c = 'Hello World!';
    debugger;
}

hello();