const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  function formatedBookNames() {
    return books.map( (book) => {
        return `${book.name} - ${book.genre} - ${book.author.name}`;
    })
    // escreva seu código aqui
  }

  function nameAndAge() {
    return books.map((book) => ({ age: book.releaseYear - book.author.birthYear, author: book.author.name, })).sort((a, b) => a.age - b.age);
    // escreva seu código aqui
  };

  function fantasyOrScienceFiction() {
    return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    // escreva seu código aqui
  }

  function oldBooksOrdered() {
    const currentYear = new Date().getFullYear();
    return books.filter((book) => currentYear - book.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);
    // escreva seu código aqui
  }

  function fantasyOrScienceFictionAuthors() {
    return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((book) => book.author.name).sort();
    // escreva seu código aqui
  }

  // function fantasyOrScienceFictionAuthors() {
  //   const wantedGenres = ['Fantasia', 'Ficção Científica'];
  //   return books
  //     .filter((book) => wantedGenres.includes(book.genre))
  //     .map((book) => book.author.name).sort();
  // }

  function oldBooks() {
    const currentYear = new Date().getFullYear();
    return books.filter((book) => currentYear - book.releaseYear > 60).map((book) => book.name);
    // escreva seu código aqui
  }

function authorWith3DotsOnName() {
  return books.filter((book) => book.author.name.startsWith('J. R. R.')).map((book) => book.name)[0];
  // escreva seu código aqui
}

// function authorWith3DotsOnName() {
//   return books.find((book) => (
//     book.author.name[1] === '.'
//     && book.author.name[4] === '.'
//     && book.author.name[7] === '.'
//   )).name
// }

// function authorWith3DotsOnName() {
//   return books.find((book) => (
//     book.author.name.split(' ')
//       .filter((word) => word.endsWith('.')).length === 3
//   )).name;
// }
const teste = 'J. R. R. Tolkien'

console.log(teste.split(' '));

  console.log(formatedBookNames());
  console.log(nameAndAge());
  console.log(fantasyOrScienceFiction());
  console.log(oldBooksOrdered());
  console.log(fantasyOrScienceFictionAuthors());
  console.log(oldBooks());
  console.log(authorWith3DotsOnName());