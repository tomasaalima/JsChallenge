function agrupamento(numbers) {
    let intervalo1 = 0;
    let intervalo2 = 0;
    let intervalo3 = 0;
    let intervalo4 = 0;
    
    for (const number of numbers) {
        if (number <= 25 && number >= 0) {
            intervalo1 += 1;
        } else if (number <= 50 && number > 25) {
            intervalo2 += 1;
        } else if (number <= 75 && number > 50) {
            intervalo3 += 1;
        } else if (number <= 100 && number > 75) {
            intervalo4 += 1;
        }
    }
    
    return [intervalo1, intervalo2, intervalo3, intervalo4];
    }