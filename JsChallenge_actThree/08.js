const teste = require("./alunos.json");

const ordenar_nascimento = json => json.sort((a,b) => Date.parse(`${a.nascimento.substring(3,5)}/${a.nascimento.substring(0,2)}/${a.nascimento.substring(6,10)}`) - Date.parse(`${b.nascimento.substring(3,5)}/${b.nascimento.substring(0,2)}/${b.nascimento.substring(6,10)}`));

console.log(ordenar_nascimento(teste));