//Assemlha-se ao método call. Porém os argumentos (2º exemplo) são passados dentro de uma array

const pessoa = {
    nome: "Bruno",
};

const animal = {
    nome: "Frida",
};

function getSomeThing() {
    console.log(this.nome);
}

getSomeThing.apply(pessoa);

// Segundo exemplo: 

const meuObjeto = {
    num1: 2,
    num2: 4,
};

function soma (a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(meuObjeto, [1, 5]);