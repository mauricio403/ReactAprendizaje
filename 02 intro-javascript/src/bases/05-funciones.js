//funciones


// const saludar = function (nombre){
//     return `Hola ${ nombre}`
// }

const saludar2 =  (nombre) => {
    return `Hola ${ nombre}`
}


const saludar3 =  (nombre) =>  `Hola ${ nombre}`




console.log(saludar2('Aldebaram'))
console.log(saludar3('Aioria'))


const getUser = ()=>{
    return{
        uid: 'abc',
        username: 'xdddd'
    }
}

console.log(getUser())


//Tarea

function getUsuarioActivo(nombre){
    return {
        uid: '123546',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Mauricio')

console.log(usuarioActivo)


//transfoirmar a funcion flecha

const getUsuarioActivo = (nombre) =>(
    {
        uid: '123456',
        username: nombre
    }
);
   //aqui retorna el objeto implicito sin return y sin llaves


//retornar un objeto implicito


//probrar