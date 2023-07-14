data_quantities = [
    {"data": "2022-01-01", "qtd": 10},
    {"data": "2022-01-02", "qtd": 15},
    {"data": "2022-01-03", "qtd": 20},
    {"data": "2022-01-03", "qtd": 5},
    {"data": "2022-01-04", "qtd": 12}
]



function agregadorRegistros(registros) {
 return registros.reduce((acc, registro) => {
    const data = registro.data;
    const quantidade = registro.qtd;
    acc[data] = (acc[data] || 0) + quantidade;
    console.log(registro);
    console.log(acc);
    return acc;
    }, {});
}

console.log(agregadorRegistros(data_quantities));