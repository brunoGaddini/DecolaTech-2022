// Como declarar uma array
/*let array = ['string', 1, true];
console.log(array);
*/

// O array funciona como uma caixa por exemplo, onde pode guardar várias outras caixas, com vários elementos (valores) dentro.
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]); // [3] pegando algum valor específico, nesse caso o índice 3 [string]

/* Alguns métodos de uma array:
forEach() = itera uma array;
push() = add item no final da array;
pop() = remove item no final de uma array;
shift() = remove item no inicio da array;
unshift() = add item no inicio da array;
indexOf() = retorna o índice de um valor;
splice() = remove ou substitui um item pelo índice;
slice() = retorna uma parte de uma array existente.
*/ 

/*
//forEach
array.forEach(function(item, index){console.log(item, index)});
// Faz uma repetição para cada item ou índice dentro de uma array

//push
array.push('novo item');
console.log(array);

//pop
array.pop();
console.log(array);

//shift
array.shift();
console.log(array);

//unshift
array.unshift('novo item2');
console.log(array);

//indexOf
console.log(array.indexOf['array3']);

//splice
array.splice(0, 3);
console.log(array);

//slice
let novoArray = array.slice(0, 3);
console.log(novoArray);

/*Objetos
São propriedade e valores que definem suas características
Deve ser declarado entre {}.
*/


let object = {string: 'string', number: 1, Boolean: true, array: ['array'], objectInterno: {objectInterno: 'Objeto Interno'}};
console.log(object);
console.log(object.Boolean); //Acessando as propriedades declaradas no objeto criado
console.log(object.objectInterno);

//Desestruturação do objeto
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);


