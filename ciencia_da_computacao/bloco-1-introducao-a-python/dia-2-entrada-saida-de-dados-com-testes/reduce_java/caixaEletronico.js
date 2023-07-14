function moedas(valor, moedas) {
    const resultado = [];
    let indiceMoeda = 0;

    while (valor > 0) {
        const moedaAtual = moedas[indiceMoeda];
        if (valor >= moedaAtual) {
            resultado.push(moedaAtual);
            valor -= moedaAtual;
        } else {
            indiceMoeda++;
        }
        if (indiceMoeda === moedas.length) {
            break;
        }
    }
    return resultado;
}

const valor = 67;
const moedasCorrentes = [50, 25, 10, 5, 1];
const resultado = moedas(valor, moedasCorrentes);
console.log(resultado);
