import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp.js";
import heroes from "../../data/heroes.js";

describe('Pruebas en funciones de heroes', () => {
    test('Debe de retornar un heroe por id ', () => {
        

        const id = 1;

        const heroe =  getHeroeById(id);

        const heroeData = heroes.find(h =>  h.id === id)

        expect(heroe).toEqual (heroeData)
    });

    test('Debe de retornar undefined si heroe no existe ', () => {
        

        const id = 50;

        const heroe =  getHeroeById(id);

        // const heroeData = heroes.find(h =>  h.id === id)

        expect(heroe).toBe (undefined)
    });

    test('Debe retornar un arreglo de heroes de DC ', () => {
        
        const owner = 'DC';

        const heroeDc = [ 
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]
        const dc = getHeroesByOwner(owner);

        expect(heroeDc).toEqual(dc)


    });

    test('Debe retornar la cantidad de heroes de Marvel ', () => {
        
        const owner = 'Marvel'
        const numHeroe = 2;

        const numeroHeroes = getHeroesByOwner(owner)

        const numero = numeroHeroes.length
        
        expect(numHeroe).toBe(numero)
    })
    
    
    
})
