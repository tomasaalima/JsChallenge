const cambio = dolares => dolares.map(element => `R$ ${(element*5.042).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
