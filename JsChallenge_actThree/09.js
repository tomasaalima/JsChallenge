const semestres_entrada = json => {
        const array = new Array();
        const object = new Object();

        semesters(json).forEach(element => {
                object.semestre = `${element.substring(0,4)}.${element.substring(4,5)}`;
                object.quantidade = quantity(json, element);
                object.percentual = `${((object.quantidade / Object.keys(json).length) * 100).toFixed(2)} %`;
                
                array.push(Object.assign({}, object));

        });

        return array;
};

const quantity = (json, semester) => json.filter(element => element.matricula.substring(0,5) == semester).length;

const semesters = json => new Set(json.map(element => element.matricula.substring(0,5)).sort((a,b) => a - b));