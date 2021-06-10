// import {heroes} from './data/heroes';
// import {heroes} from './data/heroes'

import heroes from "../data/heroes";





// const getHeroebyID = (id) => {
//     return heroes.find( ( heroe ) => {
//         if (heroe.id == id){
//             return true;
//         } else{
//             return false
//         }
//     })
// }

//find and filter

const getHeroebyID = (id) => heroes.find( ( heroe ) => heroe.id == id)

// console.log(getHeroebyID(3))


 export const getHeroesByOwner = (owner) => heroes.filter( ( heroe ) => heroe.owner == owner)

// console.log(getHeroesByOwner('Marvel'));

export default getHeroebyID;