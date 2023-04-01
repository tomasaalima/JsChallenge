function preco_final(preco, forma_pagamento) {
    let desconto = 0;
  
    switch (forma_pagamento) {
      case 1:
        desconto = 0.15;
        break;
      case 2:
        desconto = 0.10;
        break;
      case 3:
        desconto = 0.05;
        break;
      case 4:
        desconto = 0.00;
        break;
      default:
        return "Forma de pagamento inválida";
    }
  
    let preco_com_desconto = preco - (preco * desconto);
    return "R$ " + preco_com_desconto.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }