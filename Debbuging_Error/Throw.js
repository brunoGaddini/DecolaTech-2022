// Palindromo: palavra lida trás pra frente e vice-versa

function verificaPalindromo(string) {
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');

// No primeiro exemplo, tem o retorno de uma string mesmo
// No segundo exemplo o retorno é um erro e todas suas propriedades.

function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');