import React from 'react'
import {shallow} from 'enzyme'
import CounterApp from '../counterApp'

describe('Pruebas en el COunterApp', () => {
  
    const wrapper = shallow(<CounterApp/>)

    test('Debe mostar CpunterApp correctamente ', () => {
        
       

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar el valor por defecto de 100 ', () => {


        const wrapper = shallow(<CounterApp value={100}/>)

       const counterText =  wrapper.find('h2').text()

       console.log(counterText)

       expect(counterText).toBe('100')
    });

    test('Debe de incrementar con el boton +1 ', () => {
        
    const wrapper = shallow(<CounterApp value={0}/>)
     wrapper.find('button').at(0).simulate('click');
    //    console.log(btn1.html())
        const counterText =  wrapper.find('h2').text().trim()
        expect(counterText).toBe('1')

    });
    
    test('Debe de disminuir con el boton +1 ', () => {
        
    const wrapper = shallow(<CounterApp value={0}/>)
     wrapper.find('button').at(2).simulate('click');
   
        const counterText =  wrapper.find('h2').text().trim()
        expect(counterText).toBe('-1')

    });

    test('Debe resetaear el valor por defecto al click ', () => {
      
        const wrapper = shallow(<CounterApp value={511}/>)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText =  wrapper.find('h2').text().trim()
       
        expect(counterText).toBe('511')

    })
    
    
    
    
});


