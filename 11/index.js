const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const filtrarNomes = nomes.filter((nome) => {
    return nome[0] === 'a' || nome[0] === 'A';
});

console.log(filtrarNomes);