function display(data) {
    document.getElementById('display').innerHTML = data;
}

function toConsole(data) {
    console.log(data);
}

function multiply(num1, num2, callbackFn) {
    const result = num1 * num2;
    callbackFn(result);
}

function filter(numbers, filterFn) {
    let results = [];
    for (const number of numbers) {
        if (filterFn(number)) {
            results.push(number);
        }
    }
    return results;
}

function isOdd(number) {
    return number %2 != 0;
}

function isEven(number) {
    return number % 2 === 0;
}

function scary(name) {
    document.getElementById('main').innerHTML = 'Booh, ' + name;
}

function showCurrentTime() {
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    document.getElementById('time').innerHTML = currentHours + ':' + currentMinutes + ':' + currentSeconds;
} 

multiply(9, 10, display);
multiply(4, 9, toConsole);

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));

setTimeout(scary, 3000, 'John');

setInterval(showCurrentTime, 1000);

function loadCharacter(characterId, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://rickandmortyapi.com/api/character/' + characterId);
    
    request.onload = function() {
        if (request.status !== 200) {
            callback('Error loading a character!');
        } else {
            callback(null, request.response);
        }
    };

    request.onerror = function() {
        callback('Something went wrong');
    }

    request.send();
}

function onCharacterLoad(error, characterData) {
    if (error) {
        console.error(error);
    } else {
        let character = JSON.parse(characterData);
        console.log('Character: ' + character.name + ', status: ' + character.status);
    }

}

loadCharacter(2, onCharacterLoad);
loadCharacter(999, onCharacterLoad);