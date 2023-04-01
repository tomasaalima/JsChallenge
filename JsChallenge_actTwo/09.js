function ipv4_bits(ipv4) {
    let parts = ipv4.split('.');
  
    if (parts.length !== 4) {
      return 'Invalid IPv4 address';
    }
  
    let bits = '';
    for (let i = 0; i < 4; i++) {
      let part = parseInt(parts[i]);
      if (isNaN(part) || part < 0 || part > 255) {
        return 'Invalid IPv4 address';
      }
      bits += ('00000000' + part.toString(2)).slice(-8);
    }
  
    return bits;
  }