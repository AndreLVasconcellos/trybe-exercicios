// const substituaX = (nome) => {
//     const frase = 'Tryber x aqui!';
//     const fraseArray = frase.split(' ');
//     for (let index = 0; index < fraseArray.length; index += 1) {
//       if (fraseArray[index] === 'x') {
//         fraseArray[index] = nome;
//       }
//     }  
//     return fraseArray.join(' ');
//   };
  
//   console.log(substituaX('Bebeto'));
  
// skills.forEach((skills) => {resultado = `${resultado} - ${skills}`;


const subX = nome => {
    const text = 'Trybe x aqui!'
    const textArray = text.split(' ');
    textArray[1] = nome;
    return textArray.join(' ');
};


const mySkills = func => {
    const skills = ['javaScript', 'HTML', 'CSS'];
    let resultado = `
    ${func}
    Minhas trés habilidades são:`;
    for (let skill of skills) {
    resultado = `${resultado}
    - ${skill}`;
    }
    return resultado
};



console.log(subX('Bebeto')); 
console.log(mySkills(subX('Bebeto')));
