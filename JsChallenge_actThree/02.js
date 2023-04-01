const filtro_naturalidade = (city, json) => {
    const array = [];

    json.forEach(element => {
        if(element.naturalidade == city){
            array.push(element);
        }
    });

    return array;
} 