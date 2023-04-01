const teste = require("./alunos.json");

const element_counter = (json, value) => json.filter(element => element == value).length;

const estatistica_naturalidade = json => {
        const array = gambiarra(json);
        const object = new Object();

        array.forEach(element => {
                const temp = element.split(":");
                object[temp[0]] = parseInt(temp[1]);
        });

        return object;
};

const gambiarra = json => Array.from(new Set(json.map(element =>  `${element.naturalidade}:${element_counter(json.map(element => element.naturalidade), element.naturalidade)}`)));

console.log(estatistica_naturalidade(teste));

