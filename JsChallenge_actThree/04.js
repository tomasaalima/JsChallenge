
const aniversariantes = (number, array) => array.filter(element => element.nascimento.substring(3,5) == number).map(element => {
    return {data: element.nascimento.substring(0,5), nome: element.nome}
}).sort((a,b) => a.data.substring(0,2) - b.data.substring(0,2));
