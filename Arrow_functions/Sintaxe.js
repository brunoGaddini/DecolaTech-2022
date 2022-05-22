const helloWorld = function() {
    return "helloWorld";
};

const helloWorld2 = () => "HeeloWorld2"; // Sintaxe para retorno de functions pequenas

console.log(helloWorld);
console.log(helloWorld2);

const soma = (a, b) => a + b;
soma(4, 6);

console.log(soma);

//this sempre será o objeto global