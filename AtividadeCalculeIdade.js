function calculeIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "Carla",
    idade: 26
}

const animal1 = {
    nome: "Frida",
    idade: 7,
    raça: "Vira Lata"
}

console.log(calculeIdade.call(pessoa2, 30));
console.log(calculeIdade.call(animal1, 7));


console.log(calculeIdade.apply(pessoa1, [30]));
console.log(calculeIdade.apply(animal1, [7]));