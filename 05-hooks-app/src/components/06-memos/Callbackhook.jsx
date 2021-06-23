import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import './effects.css'
import { ShowIncrement } from './ShowIncrement';


export const Callbackhook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = ()=> {
    //     setCounter(counter +1);
    // }

   const increment = useCallback( () => {
        setCounter(c => c +1);
    }, [ setCounter ] )

    return (
        <div>
            <h1>useCallback Hook:  {counter}</h1>
            <hr />

            <ShowIncrement increment = {increment}></ShowIncrement>

        </div>
    )
}
