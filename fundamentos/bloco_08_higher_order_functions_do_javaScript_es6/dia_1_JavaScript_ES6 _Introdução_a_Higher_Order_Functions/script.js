
// Ao chamar a função doingThings:


// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!


const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!'

const doingThings = (func) => console.log(func());

doingThings(wakeUp); // Acordando!!
doingThings(breakfast); // Bota tomar café!!
doingThings(sleep); // Partiu dormir!!