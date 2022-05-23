// Assincrono: que não ocorre ou não se efetiva ao mesmo tempo

// Promisse: Objeto de processamento assíncrono. Inicialmente seu valor é desconhecido, portanto pode ser resolvida ou rejeitada. 

//await paraliza o código até a solução da promise, quando esta estiver solucionada o cód. continua rodando

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 2000);
});

let result;

try {
const resolved = await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou')
} catch(err) {
    result = err.message
}
    

    return resolved;
}