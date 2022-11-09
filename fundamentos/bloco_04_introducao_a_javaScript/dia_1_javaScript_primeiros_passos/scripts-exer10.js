let custo = 10;
let valorVenda = 40;

let valorCustoTotal;
let lucro;

valorCustoTotal = custo + custo * 0.2;
lucro = valorVenda - valorCustoTotal

console.log(lucro);
console.log(valorCustoTotal);
let lucroTotal;


if (custo < 0 || valorVenda < 0) {
    lucroTotal = "erro";
} else {
    lucroTotal = lucro * 1000;
}

console.log(lucroTotal);