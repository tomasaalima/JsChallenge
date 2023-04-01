function estatistica(numbers) {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let sum = numbers.reduce((acc, number) => acc + number, 0);
    let avg = sum / numbers.length;
    
    return [max, min, avg];
  }
  
  
  