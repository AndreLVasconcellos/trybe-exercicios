type Product = {
    barcode: string,
    price: number,
  };

// function getProduct() {
//     const product = {};
//     product.barcode = '123c456b789a'; // Error: Property 'barcode' does not exist on type '{}'.
//     return product;
//   }

  // ...

// function getProduct(): Product {
//     const product = {} as Product; // Adiciona Type Assertion
//     product.barcode = '123c456b789a';
//     return product;
//   }
  
//   console.log(getProduct());

function getProduct(): Product {
    const product: Product = {
      barcode: '123c456b789a',
      price: 5.5,
    };
    return product;
  }
  
  console.log(getProduct());