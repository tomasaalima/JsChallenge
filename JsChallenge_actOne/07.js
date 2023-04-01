function imc(altura, peso){
    let calculo = peso/(altura**2);

    switch(true){
        case calculo < 18.5: {
            return "Baixo peso"; 
            break;
        }
        case between(calculo, 18.5, 25): {
            return "Peso normal"; 
            break;
        }
        case between(calculo, 25, 29.9): {
            return "Excesso de peso"; 
            break;
        }
        case calculo > 35: {
            return "Obesidade extrema"; 
            break;
        }
        case (calculo > 30): {
            return "Obesidade"; 
            break;
        }
    }

}
    
function between(x, min, max) {
    return x >= min && x <= max;
  }