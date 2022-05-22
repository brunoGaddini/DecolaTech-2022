const pessoa = {
    nome: "Bruno",
};

const pet = {
    nome: "Frida",
};

function getSomeThing() {
    console.log(this.nome)
}

getSomeThing.call(pessoa); //Quando utilizo esse método call eu coloco qual objeto que eu quero que o this se refira (pessoa)

//getSomeThing.call(pessoa); = neste caso estou me referindo ao nome (animal)