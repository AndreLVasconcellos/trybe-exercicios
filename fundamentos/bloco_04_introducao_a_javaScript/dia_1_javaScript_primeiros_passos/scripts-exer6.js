

peca = "ToRrE";
let movimento = "?";
peca = peca.toLowerCase();


switch (peca) {
    case 'bispo':
        movimento = "anda em diagonal";
        break;
    case 'peão':
        movimento = "anda uma casa pra frente";
        break;
    case 'torre':
        movimento = "anda em linhas restas";
        break;
    default:
        movimento = "ta tudo errado"     
}

console.log(movimento); // 'Outono'





// String txt = "Hello World";
// System.out.println(txt.toUpperCase());
// System.out.println(txt.toLowerCase());
