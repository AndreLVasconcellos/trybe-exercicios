let n = 7;
let symbol = '*';
let inputLine = '';

let meioMatrix = (n + 1) / 2;
let controleEsquerda = meioMatrix;
let controleDireita = meioMatrix; 




for (let lineIndex = 1; lineIndex <= meioMatrix; lineIndex += 1) {
    inputLine = "";
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex == controleEsquerda || columnIndex == controleDireita || lineIndex == meioMatrix) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + " ";
    }
  }
  console.log(inputLine);
  controleDireita += 1;
  controleEsquerda -= 1;
};