//desestruct arreglos

const personajes = ['Mu', 'Saga', 'Mascara de Muerte'];

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

const [ aries ] = personajes;
const [ ,geminis ] = personajes;
const [ , ,cancer ] = personajes;

console.log(aries)
console.log(geminis)
console.log(cancer)


const retornaarreglo = () => {
    return ['abc', 123];
}

const [ letras, numeros] = retornaarreglo();

console.log(letras, numeros)


//tarea

const usedState = (valor  ) => {
    return [valor, ()=> {console.log('Hola mundo')}];

}


const [nombre, setNnmbre] = usedState("Maur")

console.log(nombre)

setNnmbre()

