const sexo = (json) => {
        let mulheres = 0;
        let homens = 0;

        json.forEach(element => {
            if(element.sexo === "Feminino"){
                mulheres += 1;
              }else
                homens += 1;
        });

        return `[ ${homens+mulheres}, ${homens}, ${mulheres} ]`;
}

