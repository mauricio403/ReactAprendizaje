import React from 'react';
import './effects.css'
import{useCounter}from  '../../hooks/useCounter';
import Button from '@material-ui/core/Button'
import { Small } from './Small';
import { useState } from 'react';



export const Memorize = () => {

    const {counter, increment} = useCounter(10 );

    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Memorize</h1>

            <h2>Counter:<Small value = {counter}></Small> </h2>

            <hr />


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
