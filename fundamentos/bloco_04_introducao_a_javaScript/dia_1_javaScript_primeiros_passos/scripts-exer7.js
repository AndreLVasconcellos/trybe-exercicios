
let nota = 89;
let msg;

if (nota < 0 || nota > 100) {
    msg = "Erro, erro!!!!!!!";
} else if (nota >= 90) {
    msg = "A";
} else if (nota >= 80) {
    msg = "B";
} else if (nota >= 70) {
    msg = "C";
} else if (nota >= 60) {
    msg = "D";
} else if (nota >= 50) {
    msg = "E";
} else {
    msg = "F";
} 
  
 console.log(msg);

