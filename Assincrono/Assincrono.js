// Assincrono: que não ocorre ou não se efetiva ao mesmo tempo

// Promisse: Objeto de processamento assíncrono. Inicialmente seu valor é desconhecido, portanto pode ser resolvida ou rejeitada. 

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});