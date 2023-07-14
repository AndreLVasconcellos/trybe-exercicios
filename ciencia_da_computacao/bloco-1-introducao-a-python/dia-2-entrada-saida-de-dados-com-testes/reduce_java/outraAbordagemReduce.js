const data_quantities = [
    { data: "2022-01-01", qtd: 10 },
    { data: "2022-01-02", qtd: 15 },
    { data: "2022-01-03", qtd: 20 },
    { data: "2022-01-03", qtd: 5 },
    { data: "2022-01-04", qtd: 12 }
  ];
  
const output = data_quantities.reduce((acc, curr) => {
    if (acc[curr.data]) {
      acc[curr.data] += curr.qtd;
    } else {
      acc[curr.data] = curr.qtd;
    }
    return acc;
  }, {});
  
console.log(output);
  

const teste = data_quantities.reduce((acc, curr) => {
    acc[curr.data] ? acc[curr.data] += curr.qtd : acc[curr.data] = curr.qtd;
    return acc;
    }, {});

console.log(teste);

const output2 = data_quantities.reduce((acc, curr) => ({...acc, [curr.data]: acc[curr.data] ? acc[curr.data] + curr.qtd : curr.qtd}), {});

console.log(output2);