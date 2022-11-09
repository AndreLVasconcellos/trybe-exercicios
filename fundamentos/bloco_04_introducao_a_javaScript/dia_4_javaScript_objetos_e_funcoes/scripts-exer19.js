// function encode(string) {
//     let resultado;
//    resultado = string.replace[(/a/g, '1')(/e/g, '2')(/i/g, '3')(/o/g, '4')(/u/g, '5')];
//    string.replace(/e/g, '2')
//    string.replace(/i/g, '3')
//    string.replace(/o/g, '4')
//    string.replace(/u/g, '5')
//     return resultado;
// }

// console.log(encode('hello trybe!'));


function encode(string) {
    let resultado;
    resultado = string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4)
    .replace(/u/g, 5);
    return resultado;
}
function decode(string){
    let resultado;
    resultado = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
    return resultado;
}


console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));
console.log(encode('hello'));
console.log(decode('h2ll4'));
console.log(encode('hello trybe!'));
console.log(decode('h2ll4 tryb2!'));
console.log(encode('How are you today?'));
console.log(decode('H4w 1r2 y45 t4d1y?'));
console.log(encode('This is an encoding test'));
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st'));
