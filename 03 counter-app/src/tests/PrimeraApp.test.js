
import PrimeraApp from "../PrimeraApp";
import React from 'react';
import {shallow} from 'enzyme'
describe('Pruebas en primera app', () => {
    // test('Debe mostrar el mensaje "Hola, soy goku" ', () => {
        
    //     const saludo = 'Hola soy goku';
    //     const {getByText} = render( <PrimeraApp saludo={saludo}/> )

    //   expect(getByText(saludo)).toBeInTheDocument();
    // })
    
  test('Debe mmostrar la PrimeraPp correctamente ', () => {
    

    const saludo = 'Hola soy goku'

    const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

    expect(wrapper).toMatchSnapshot();

  })
  test('Deme mostrar el subtitulo de props ', () => {
    
    const saludo = 'Hola soy goku';
    const subtitulo = 'Dame tu fuerza pegaso'

    const wrapper = shallow(
    <PrimeraApp 
    saludo={saludo} 
    subtitulo = { subtitulo }

  
    />);

      const textoParrafo = wrapper.find('p').text();
    
      expect(textoParrafo).toBe(subtitulo)

  })
  
  

})
