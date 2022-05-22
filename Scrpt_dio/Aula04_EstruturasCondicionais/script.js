var jogador1 = 1;
var jogador2 = 0;
var placar;

// Aninhamento de ifs
//!= é o sinal de diferente
//if (jogador1 != -1)

/*
  if( jogador1 > 0){
        console.log('Jogador 1 marcou ponto');
    } else if (jogador2 > 0) {
        console.log('jogador 2 marcou ponto')
    } else {
        console.log('Ninguém marcou ponto')
    } 
 */

/*
//abaixo está um exemplo de if iternário passando as duas condições.
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos!!'): console.log('Jogadores inválidos');

    if( jogador1 > 0 && jogador2 == 0){
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0 && jogador1 == 0) {
        console.log('jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
    } else {
        console.log('Ninguém marcou ponto')
    } 
 
//Usando Switch case, ele funciona como uma estrutura de decisão
switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('O jogador 1 ganhou');
        break;
    case(placar) = jogador2 > jogador1:
        console.log('O jogador2 ganhou');
        break; //break serve para não deixar o código em loop infinito
        default: //Utilizado neste exemplo, caso nenhum dos cases acima sejam acioandos
        console.log('Ninguém ganhou!')
}
*/

/*
let array = ['Valor1', 'Valor2', 'Valor3', 'Valor4', 'Valor5'];

let object = {propriedade1: 'Valor1', propriedade2: 'Valor2', propriedade3: 'Valor3'};

//for executa uma isntrução até que ela seja declarada falsa (pelo contador por exemplo)
for(let indice = 0; indice < array.length; indice++){
    console.log(indice)
}

// for/in
for(i in array){
    console.log(i); //O resultado em preto significa que é uma str
}

for(i in object) {
    console.log(i);
}

// for/of
for(i of array){ //não funciona com objetos pois as propriedades variam, diferente do índice em um array. Para fazer isso preciso passar a propriedade dentro da condição. Exemplo abaixo
    console.log(i);
}

// for/of com obejto
for(i of object.propriedade1) {
    console.log(i); //Imprime cada letra em uma linha
}

//while executa uma instrução 'enquanto' determinada condição for verdadeira
*/

var a = 0;

while(a < 10) {
    a++;
    console.log(a)
}

// Do/While executa uma instrução 'até' que determinada condição seja falsa.
var b = 0
do {
    b++;
    console.log(b);
} while (b < 10)


