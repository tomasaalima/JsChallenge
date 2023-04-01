function pa(inicio, razao, quantidade) {
    let result = "";
    
    for (let i = 0; i < quantidade; i++) {
    result += `${inicio + (razao * i)}` ;
    
    if(i == quantidade - 1){
        result += '...';
    }else{
        result += ', ';

    }
    }
    
    return result.trim();
    }