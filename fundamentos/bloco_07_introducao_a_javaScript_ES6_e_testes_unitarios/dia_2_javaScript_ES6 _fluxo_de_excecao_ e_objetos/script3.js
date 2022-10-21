const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  

const addNewkey = (obj, key, value) => {
    obj[key] = value;
}; 

addNewkey(lesson2, 'turno', 'noite');
console.log(lesson2);


const listKeys = obj => Object.keys(obj);

console.log(listKeys(lesson1));

const sizeObj = obj => Object.keys(obj).length;
console.log(sizeObj(lesson1));

const listValue = obj => Object.values(obj);
console.log(listValue(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes);

const getNumberOfStudents = obj => {
    let total = 0;
    const array = Object.keys(obj);
    console.log(array);
    for (index in array) {
        total += obj[array[index]].numeroEstudantes;
    }
    return total;
};
console.log(getNumberOfStudents(allLessons));

console.log(Object.values(Object.values(allLessons)[2])[2]);
console.log(Object.values(Object.values(allLessons)[0])[1]);

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj)
    console.log(arr);
    let isEqual = false;
    for (let index in arr) {
        if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));

console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */