import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas cons async y await y Fetch', () => {
    test('Debe retornar el url de la umagen', async() => {
        
       const url = await getImagen();

       expect( typeof url).toBe('string')
    })
    
})
