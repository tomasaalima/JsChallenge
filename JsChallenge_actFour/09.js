function validar_dacBB(string){
    let numero = string.split("-")[0];
    let dv = string.split("-")[1];
    let soma = 0;
    let multiplicador = 2;
    for(let i = numero.length - 1; i >= 0; i--){
        soma += numero[i] * multiplicador;
        multiplicador++;
        if(multiplicador == 10){
            multiplicador = 2;
        }
    }
    let resto = soma % 11;
    let dac = 11 - resto;
    if(dac == 11){
        dac = 0;
    }else if(dac == 10){
        dac = "X";
    }
    if(dac == dv){
        return true;
    }else{
        return false;
    }
}

console.log(validar_dacBB('01230067896-0'));
console.log(validar_dacBB('01230067896-5'));