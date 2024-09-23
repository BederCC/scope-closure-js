function greeting(){
    let username = 'John';

    function displayUsername(){
        return 'Hi, ' + username;
    }
    return displayUsername;
}

const g = greeting();
console.log(g); // [Function: displayUsername]
console.log(g()); // Hi, John