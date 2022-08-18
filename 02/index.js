const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const validarPalavra = palavras.some((palavra) => {
    return palavra.length > 5;

});

if (validarPalavra) {
    console.log('existe palavra inválida');
} else {
    console.log('Array valida');
};
