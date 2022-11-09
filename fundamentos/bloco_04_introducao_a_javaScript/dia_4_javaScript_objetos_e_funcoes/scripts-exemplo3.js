let a;
let b;

function maiorNumero(a, b) {
    if (a < b) {
        return b + " é maior que " + a + ".";
    } else {
        return a + " é maior que " + b + ".";
    }
}


console.log(maiorNumero(800, 750));