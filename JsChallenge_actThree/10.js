const teste = require("./alunos.json");

const pesquisar_nome = (search, json) => json.filter(element => element.nome.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(search.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')));

console.log(pesquisar_nome("an", teste))