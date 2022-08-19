const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const validarListaCompra = palavras.some((produto) => {
    return produto === 'cerveja' || produto === 'vodka';
});

if (validarListaCompra) {
    console.log('revise sua lista, joão. possui bebida com venda proibida!');
} else {
    console.log('tudo certo, vamos as compras!');
};