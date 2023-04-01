function bhaskara(ax2, bx, c) {
    let delta = bx ** 2 - 4 * ax2 * c;
    let results = [];
    
    if (delta < 0) {
      return results;
    } else if (delta === 0) {
      let x = -bx / (2 * ax2);
      results.push(x);
      return results;
    } else {
      let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
      let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
      results.push(x1, x2);
      return results;
    }
  }