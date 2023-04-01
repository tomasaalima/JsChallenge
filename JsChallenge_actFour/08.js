function velha(array) {
  let x = 0;
  let o = 0;
  let vazio = 0;
  let vencedor = "";
  let deuVelha = false;
  let vez = "X";
  let resultado = "";
  for (let i = 0; i < array.length; i++) {
      if (array[i] === "X") {
          x++;
      } else if (array[i] === "O") {
          o++;
      } else if (array[i] === " ") {
          vazio++;
      }
  }
  if (x > o) {
      vez = "O";
  }
  if (x === o) {
      vez = "X";
  }
  if (array[0] === array[1] && array[1] === array[2]) {
      vencedor = array[0];
  }
  if (array[3] === array[4] && array[4] === array[5]) {
      vencedor = array[3];
  }
  if (array[6] === array[7] && array[7] === array[8]) {
      vencedor = array[6];
  }
  if (array[0] === array[3] && array[3] === array[6]) {
      vencedor = array[0];
  }
  if (array[1] === array[4] && array[4] === array[7]) {
      vencedor = array[1];
  }
  if (array[2] === array[5] && array[5] === array[8]) {
      vencedor = array[2];
  }
  if (array[0] === array[4] && array[4] === array[8]) {
      vencedor = array[0];
  }
  if (array[2] === array[4] && array[4] === array[6]) {
      vencedor = array[2];
  }
  if (vazio === 0) {
      deuVelha = true;
  }
  if (vencedor === "X") {
      resultado = "Jogador X venceu!";
  } else if (vencedor === "O") {
      resultado = "Jogador O venceu!";
  } else if (deuVelha) {
      resultado = "Deu velha!";
  } else {
      resultado = "Vez do jogador " + vez + ".";
  }
  return resultado;
}

console.log(velha(["X", " ", "O", " ", "O", "X", "O", "X", " "]));