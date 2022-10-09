function techList(array, string) {
    let result = [];
    let obj;
    array.sort()
    if (array.length === 0){
      return "Vazio!";
    } else {
    for (let index = 0; index < array.length; index += 1) {
      obj = {}; 
      obj.tech = array[index];
      obj.name = string;
      result.push(obj);
     }             
      }
    return result;    
      }  
      
    console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
    console.log(techList([ ], 'Lucas'));

