const myGlobal = 0;

function myFunction() {
    const mynumber = 1;
    console.log(myGlobal);

    function parent(){ //funcion interna
        const inner = 2;
        console.log(mynumber, myGlobal);

        function child(){
            console.log(inner, mynumber, myGlobal);
        }
        return child;
    }
    return parent;
}

myFunction()()(); // 0 1 0 2 1 0