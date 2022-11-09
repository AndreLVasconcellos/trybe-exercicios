  const newObj = (nomeCompleto) => {
    const Cadastro = {
        nomeCompleto: nomeCompleto,
        email: `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`,
    }
    return Cadastro;
  };
  
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), 
      id2: callback('Luiza Drumond'), 
      id3: callback('Carla Paiva'), 
    }
    return employees;
  };

console.log(newEmployees(newObj));

// console.log(newObj('Pedro Guerra'));
// let nome = 'Pedro Guerra';
// console.log(nome.split(' ').join('_'));