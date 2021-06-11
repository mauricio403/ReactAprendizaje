import React  from 'react'
import PropTypes from 'prop-types'
//import React, { Fragment } from 'react'


const PrimeraApp = ({ saludo, subtitulo  })=>{
    
    // const saludo = 'Hola mundo ';

     //console.log(props)




    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null,3) }</pre> */}
            <p>{ subtitulo }</p>
        </>
        
    );
    
}

//Aqui se define una propiedad obligatoria que tiene el componente
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//Aqui defino una propiedad del componente por defecto
PrimeraApp.defaultProps ={
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;