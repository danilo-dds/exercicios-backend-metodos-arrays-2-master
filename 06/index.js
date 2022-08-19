const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const filtrarCidades = cidades.filter((cidade) => {
    //let cidade = cidade.trim();
    return cidade.length <= 8;

});

console.log(filtrarCidades);

const arrayFormatado = filtrarCidades.join(', ');

console.log(arrayFormatado);