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