function fatorial(n) {
    let result = 1;
    let sequence = `${n}! = `;
  
    for (let i = n; i >= 1; i--) {
      result *= i;
      sequence += `${i}`;
      if (i > 1) {
        sequence += ` X `;
      }
    }
  
    sequence += ` = ${result}`;
    return sequence;
  }