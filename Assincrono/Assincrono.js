// Assincrono: que não ocorre ou não se efetiva ao mesmo tempo

// Promisse: Objeto de processamento assíncrono. Inicialmente seu valor é desconhecido, portanto pode ser resolvida ou rejeitada. 

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 2000);
});

const resolved = await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou')
    .catch((err) => console.log(err.message));  

    return resolved;
}