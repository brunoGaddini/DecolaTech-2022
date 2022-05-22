var currentNumberWrapper = document.getElementById('currentNumber'); 
var currentNumber = 0;
// currentNumberWrapper é a referência do span no meu html

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}