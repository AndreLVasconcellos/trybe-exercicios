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
 
  function authorBornIn1947(array, ano) {
    return array.find((obj) => obj.author.birthYear === ano).author.name;
  }; 

  function smallerName(array) {
    let nameBook;
    array.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        } 
    });
    return nameBook;
  };
  
  function getNamedBook(array) {
    return array.find((obj) => obj.name.length === 26).name;
  };
  
  function booksOrderedByReleaseYearDesc(array) {
    return array.sort((a, b) => b.releaseYear - a.releaseYear)
  };


function everyoneWasBornOnSecXX(array) {
  return array.every((obj) => obj.author.birthYear > 1900 && obj.author.birthYear <= 2000)
};

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

function authorUnique() {
  return books.every((book) =>
  !books.some((bookSome) =>
    (bookSome.author.birthYear === book.author.birthYear)
    && (bookSome.author.name !== book.author.name)));
}

  console.log(authorBornIn1947(books, 1947));
  console.log(smallerName(books));
  console.log(getNamedBook(books));
  console.log(booksOrderedByReleaseYearDesc(books));
  console.log(everyoneWasBornOnSecXX(books));
  console.log(someBookWasReleaseOnThe80s(books));
  console.log(authorUnique());