import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './counterApp';




const divRoot = document.querySelector('#root');


//  ReactDOM.render( <PrimeraApp saludo = "Hola soy goku"/> ,divRoot )
ReactDOM.render( <CounterApp value = {511}/> ,divRoot )

