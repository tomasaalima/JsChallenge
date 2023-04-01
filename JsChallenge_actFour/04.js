function recruta(str) {
    const direcoes = ['Norte', 'Leste', 'Sul', 'Oeste'];
    let direcao = 0; 
  
    for (let i = 0; i < str.length; i++) {
      const comando = str[i];
      if (comando === 'E') {
        direcao = (direcao - 1 + 4) % 4;
      } else if (comando === 'D') {
        direcao = (direcao + 1) % 4;
      }
    }
  
    return direcoes[direcao];
  }

console.log(recruta('EEED'));
console.log(recruta('D'));

