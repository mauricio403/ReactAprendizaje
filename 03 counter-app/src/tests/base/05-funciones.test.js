import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas de funciones', () => {
    
     test('getUser Debe retornar un objeto ', () => {
         
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual(userTest)

     })
     
})

//deber de testear la funcion getUsuarioActivo


describe('El getUsuarioActivo debe retornar un objeto y recibe argumento', () => {
    

     test('Retornaun objeto de argumento ', () => {
        
        const nom = "Patricia"

        const usuario = {
            uid: 'ABC567',
            username: nom
        };

        const esperado = getUsuarioActivo(nom)

        expect(usuario).toEqual(esperado)
     })
     
})

