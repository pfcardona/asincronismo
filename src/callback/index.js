function sum(num1, num2) {
    return num1 + num2
  }
  
  
  function calc(num1, num2, callback) {
    return callback(num1, num2)
  }
  
  console.log(calc(4, 2, sum));
  

  
  // segundo ejemplo
  
  function date(callback) { 

    console.log(new Date);
// hacemos llamado n tiempo este caso nuestro callbaack
    setTimeout(() => {

    // este código  se ejecuta despues de un tiempo 
    // especificado         
      let date = new Date;

      // se ejecuta la fn que muestra function date que recibo como  parámetro
      callback(date)
    }, 3000);
  }
  
  function printDate(dateNow) {
  console.log(dateNow);
  }
  
  date(printDate);