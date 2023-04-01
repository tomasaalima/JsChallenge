function intervalo(inicio, fim) {
    let result = [];
    if(inicio < fim){
      for (let i = inicio; i <= fim; i++) {
        result.push(i);
      }

    }else{
      for (let i = inicio; i >= fim; i--) {
        result.push(i);
      }
    }
    return result;
  }