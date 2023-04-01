function febre(temperatures) {
    let result = [];
  
    for (let i = 0; i < temperatures.length; i++) {
      let temperature = temperatures[i];
      if (isNaN(temperature)) {
        result.push('Invalid input');
        continue;
      }
  
      if (temperature >= 41) {
        result.push('Hipertermia');
      } else if (temperature >= 39.6) {
        result.push('Febre Alta');
      } else if (temperature >= 37.8) {
        result.push('Febre');
      } else if (temperature >= 35.1) {
        result.push('Normal');
      } else {
        result.push('Hipotermia');
      }
    }
  
    return result;
  }