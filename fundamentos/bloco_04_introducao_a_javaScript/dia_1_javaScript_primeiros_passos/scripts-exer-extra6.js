let dadoNumero = 16;
let classe = '';

if (dadoNumero < 4) {
   classe = 'Guerreiro(a)';
} else if (dadoNumero >= 4 && dadoNumero < 8) {
   classe = 'Ladino(a)';
} else if (dadoNumero >= 8 && dadoNumero < 12) {
   classe = 'Curandeiro(a)';
} else if (dadoNumero >= 12 && dadoNumero < 16) {
   classe = 'Arqueiro(a)';
} else {
   classe = 'Feiticeiro(a)';
}

resultado = 'Sua classe é: ' + classe; 

console.log(resultado);