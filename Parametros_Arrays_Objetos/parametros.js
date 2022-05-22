/*function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}

exponencial ([1,2,3,4])
*/

// Arrays - Técnica Spreads: forma de lidar separadamente com os elementos declarados na function
function sum (x, y, z){
    return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers)); // Para isso coloca-se os três .... + o nome da variável (numbers)

// Rest: combina os elementos de uma array

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(1, 2, 3)

console.log(confereTamanho);

//Object Destructuring: entre as {} eu filtro os dados que quero utilizar

