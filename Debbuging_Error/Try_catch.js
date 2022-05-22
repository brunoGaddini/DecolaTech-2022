// O bloco try verifica um pedaço de código, se esse pedaço houver algum tipo de erro, este vai ser capturado na função catch

function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e) {
        console.log(e)
    }
}

tryCatchExemplo(e);