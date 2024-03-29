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

    const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
    console.log(allLessons);

    const getNumberOfStudentsMath = obj => {
        let total = 0;
        const array = Object.keys(obj);
        for (index in array) {
        if (obj[array[index]].materia === 'Matemática') {
            total += obj[array[index]].numeroEstudantes;
        }    
        }
        return total;
    };
    console.log(getNumberOfStudentsMath(allLessons));

    const getInfo = (obj, name) => {
        const allLessons = [];
        let allStudent = 0;
        const array = Object.values(obj)
            for (index in array) {
                if (array[index].professor === name) {
                    allLessons.push(array[index].materia);
                    allStudent += array[index].numeroEstudantes;
        }
        }
        return { lessons: allLessons, estudantes: allStudent };
    };

    const createReport = (allLessons, name) => {
        const report = {};
        report.professor = name;
        Object.assign(report, getInfo(allLessons, name));
        console.log(`Relatório do(a) professor(ra): ${name}, aulas que ele(a) ministrou são de: ${Object.values(report)[1][0]}  e o número total de ${report.estudantes} estudantes.`);
        return report;
        
    };

    console.log(createReport(allLessons, 'Maria Clara'));

    