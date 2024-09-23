function alcancia(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Coins saved: $${saveCoins}`);
}
// The function alcancia() is not returning a function, so it is not a closure.
// esta funcion no suma los valores de las monedas, solo imprime el valor de la moneda que se le pasa como parametro
alcancia(5);
alcancia(5);

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`Coins saved: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(4); // Coins saved: $4
myMoneyBox(6); // Coins saved: $10
myMoneyBox(10); // Coins saved: $20

const myMoneyBox2 = moneyBox();
myMoneyBox2(5); // Coins saved: $5
myMoneyBox2(10); // Coins saved: $15
myMoneyBox2(15); // Coins saved: $30