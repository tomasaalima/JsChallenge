function media_ponderada(nota1, nota2){
    let media = ((nota1 * 4) + (nota2 * 6))/10;

    switch(true){
        case media >= 90:
            return "A";
            break;
        case media >= 75 && media < 90:
            return "B";
            break;
        case media >= 60 && media < 75:
            return "C";
            break;
        case media >= 40 && media < 60:
            return "D";
            break;
        case media < 40:
            return "E";
            break;
    }
}

console.log(media_ponderada(30,20));