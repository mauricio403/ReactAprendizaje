import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);  //[]
   
    


    //handleAdd
    const handleAdd = (e) => {
       setCounter( counter +1);
       //setCounter( (c) => c +1 )
    }

    //handleMenos
    const handleMenos = () => {
        setCounter( counter -1)
    }

    //handleReset

    const handleReset = () => {
        setCounter (value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick = { handleReset}>Reset</button>
            <button onClick= {handleMenos}>-1</button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


