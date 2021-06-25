import getSaludo from "../../base-pruebas/02-template-string";



describe('Pruebas en 02-tenplate', () => {
    
    test('getSaludo debe retornar hola Mauricio', () => {
        
        const nombre = 'Mauricio';

        const saludo = getSaludo(nombre)

        expect( saludo).toBe('Hola ' + nombre)

    })
    
})


describe('Segunda prueba en el 02-template', () => {
    
    test('Deberia mostrar el nombre que se mando por defecto ', () => {
        
        
        const saludo = getSaludo()

        expect( saludo).toBe('Hola Viviana')
    })
    
})
