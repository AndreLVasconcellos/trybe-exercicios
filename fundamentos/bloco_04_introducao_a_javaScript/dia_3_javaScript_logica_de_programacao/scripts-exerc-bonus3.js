let n = 5;
let simbulo = "*";
let linha = "";
let posicao = n - 1;


for (let lineIndex = 0; lineIndex < n; lineIndex++) {
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
        if (columnIndex < posicao) {
            linha = linha + " ";
        } else {
            linha = linha + simbulo;
        }
        
    }
    console.log(linha);  
    linha = "";
    posicao -=1;
}