import React from 'react'
import Button from '@material-ui/core/Button'
import './counter.css';
import { useState } from 'react';


export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    // console.log(counter)
    
    const {counter1, counter2} = state;

    return (
        <>
         <h1>Counter 1 : {counter1}</h1>   
         <h1>Counter 2 : {counter2}</h1>   

         <hr />

         <Button 
                className="btn btn-primary" 
                variant="contained" 
                color="secondary"
                onClick = { () => {

                    setState ({
                        ...state,
                        counter1: counter1 + 1
                    });
                }}
            >
           +1
         </Button>
        </>
    )
}
