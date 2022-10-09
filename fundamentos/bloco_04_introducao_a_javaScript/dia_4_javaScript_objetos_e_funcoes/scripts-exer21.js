
   const codigo = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
        
       let frase = 'hi there!'
       let novaFrase = "";
 
    for (let index = 0; index < frase.length; index++) {
                
                 let letraDaFrase = frase[index]
                 console.log(letraDaFrase);
                 for (key in codigo) {
                    if (key === letraDaFrase) {
                         novaFrase += codigo[key];
                    } else {
                         novaFrase += letraDaFrase;
                         
                    }
                 }

    }
          console.log(novaFrase);
    