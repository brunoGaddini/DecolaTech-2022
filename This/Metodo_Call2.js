const meuObjeto = {
    num1: 2,
    num2: 4,
};

function soma (a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(meuObjeto, 1, 5) // Aqui estou passando depois das vírgulas as referência para valor a e b

