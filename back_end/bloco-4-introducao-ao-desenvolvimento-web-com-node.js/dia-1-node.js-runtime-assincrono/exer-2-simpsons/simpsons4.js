const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id))); // aqui convertemos o ID pra número, já que ele está salvo no JSON como string

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
// ...

function main() {
    createSimpsonsFamily();
}

main();