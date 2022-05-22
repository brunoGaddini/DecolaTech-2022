// Função invocável
const soma3 = (
function(a, b){
    return a + b;
}
)(1,2);
console.log(soma3);

//Calback: uma função passada comoa rgumento para outra função
num1 = 1;
num2 = 2;

const calc = function(operacao, num1, num2){
    return operacao (num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2
}
 const resultSoma = calc(soma, num1, num2);
 const resultSub = calc(sub, num1, num2);

 console.log(resultSoma);
 console.log(resultSub);