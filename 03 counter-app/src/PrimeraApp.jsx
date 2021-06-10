import React  from 'react'
//import React, { Fragment } from 'react'


const PrimeraApp = ()=>{
    
     const saludo = 'Hola mundo ';
    //const saludo = 123;
    // const saludo = {
    //     nombre : 'Mauricio',
    //     edad: 21
    
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null,3) }</pre> */}
            <p>Mi primera Aplicacion</p>
        </>
        
    );
    
}

export default PrimeraApp;