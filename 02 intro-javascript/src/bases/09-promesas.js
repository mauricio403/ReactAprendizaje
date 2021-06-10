//promesas

import getHeroebyID, { getHeroesByOwner } from "./bases/08-exportaciones";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroebyID(2);

//     resolve(heroe);

//     // reject("No se pudo encontrar e; heroe")
//   }, 2000);
// });

// promesa.then((heroe) => {
//     console.log("then de la promesa", heroe);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });


const getHeroeByIdAsync = (id) => {

   return new Promise((resolve, reject) => {
        setTimeout(() => {
          const heroe = getHeroebyID(id);
          if (heroe) {  
            resolve(heroe);
          } else{
            reject("No se pudo encontrar e; heroe")
          }
          
        }, 2000);
      });
      
     
}

getHeroeByIdAsync(1)
.then(heroe => {
    console.log( heroe)
})
.catch(err => {
    console.warn(err)
})