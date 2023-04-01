function tabuada(num) {
  let tabuada = "";
  for (let i = 0; i <= 10; i++) {
    tabuada += `${num} x ${i} = ${num * i}`;
    if(i != 10)
      tabuada += ", ";
  }
  return tabuada;
}