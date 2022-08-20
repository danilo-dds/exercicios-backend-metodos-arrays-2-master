const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const programadoMaior20 = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Programador' && pessoa.idade > 20;
});

console.log(programadoMaior20);

const jornalistaMaior30 = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Jornalista' && pessoa.idade > 30;
});

console.log(jornalistaMaior30);

const jornalistaJovem = pessoas.filter((pessoa) => {
    return pessoa.idade < 30;
});

console.log(jornalistaJovem);