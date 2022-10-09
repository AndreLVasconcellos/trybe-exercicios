let n = 5;
let symbol = '*';
let inputLine = '';

let meioMatrix = (n + 1) / 2;
let controleEsquerda = meioMatrix;
let controleDireita = meioMatrix; 




for (let lineIndex = 0; lineIndex <= meioMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controleEsquerda && columnIndex < controleDireita ) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + " ";
    }
  }
  console.log(inputLine);
  inputLine = '';
  controleDireita += 1;
  controleEsquerda -= 1;
};
