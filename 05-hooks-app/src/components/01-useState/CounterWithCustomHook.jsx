import React from 'react'
import Button from '@material-ui/core/Button'
import "./counter.css";
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

   const { increment, decrement, reset, counter} =  useCounter(5);


    return (
        <>
         <h1>Counter With Hook: { counter }</h1>   
         <hr />

         <Button onClick ={ () => increment(5)} className="btn" variant="outlined" color="default"> +1</Button>
         <Button onClick ={decrement} className="btn" variant="outlined" color="primary"> -1 </Button>
         <Button onClick ={reset} className="btn" variant="outlined" color="primary"> Reset </Button>
        </>
    )
}
