//desestructuracion de objetos
//asignacion desestructurante
const persona = {
    nombre: "Patricia",
    edad: 21,
    clave: 'xddd'
};

const {nombre, edad, clave} = persona; 


// console.log(nombre);
// console.log(edad);
// console.log(clave);
// console.log(persona.edad);
// console.log(persona.clave);


const usedContext = ({nombre, edad, clave}) => {
    
    // console.log(nombre, edad)

    return{
        nombreClabe: clave,
        anios : edad,
        latlng: {
            lat: 14.055,
            lng: -12145
        }

    }

}


const {nombreClabe, anios, latlng: {lat, lng}} = usedContext(persona)

console.log(nombreClabe, anios)
console.log(lat, lng)