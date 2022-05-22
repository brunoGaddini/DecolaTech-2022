// Bind clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

const retornaNome = function() {
    return this.nome;
};

let Bruno = retornaNome.bind({nome: "Bruno"});

Bruno();
