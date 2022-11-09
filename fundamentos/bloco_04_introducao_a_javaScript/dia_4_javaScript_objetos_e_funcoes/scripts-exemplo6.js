function verificaTriangulo(anguloUm, anguloDois, anguloTres) {
    if (anguloUm < 0 || anguloDois < 0 || anguloTres < 0) {
        return "Erro!!!"
    }if (anguloUm + anguloDois + anguloTres === 180 ) {
        return true   
    } else {
        return false
    } 
}

console.log(verificaTriangulo(90, -60, 5));


// function triangleAnglesValidate(angleA, angleB, angleC) {
//     let sumOfAngles = angleA + angleB + angleC;
//     let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
//     if (allAnglesArePositives) {
//       if (sumOfAngles === 180) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return 'Erro: ângulo inválido';
//     }
//   }