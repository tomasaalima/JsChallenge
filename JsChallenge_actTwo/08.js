function fibonacci(number) {
    if (isNaN(number) || !Number.isInteger(number) || number < 0) {
      return 'Invalid input';
    }
  
    let fib = [0, 1];
    for (let i = 2; i < number; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return `${fib.slice(0, number).join(', ')}...`;
  }
