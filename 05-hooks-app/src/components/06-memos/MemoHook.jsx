import React, { useMemo } from 'react';
import './effects.css'
import{useCounter}from  '../../hooks/useCounter';
import Button from '@material-ui/core/Button'
import { useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';



export const MemoHook = () => {

    const {counter, increment} = useCounter(1000 );

    const [show, setShow] = useState(true)

    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);


    return (
        <>
            <h1>Memo Hook</h1>

            <h2>Counter: <small>{counter}</small> </h2>

            <hr />

            <p>{memoProcesoPesado}</p>

            <Button 
            variant="contained" 
            color="primary"
            onClick={increment}
            >
              +1
            </Button>

            <Button 
            variant="contained" 
            color="secondary" 
            onClick = {() => {
                setShow(!show)
            }}>
              Show / Hide  {JSON.stringify(show)}
            </Button>
       </>
    )
}
