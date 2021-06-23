import React, { useLayoutEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import './effects.css';
import Button from '@material-ui/core/Button'
import { useCounter } from '../../hooks/useCounter';
import { useRef } from 'react';


export const Layout = () => {

   const {counter, increment} =  useCounter(1);

   const { data }  =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   

    const { quote} = !!data && data[0];

    const pTag = useRef();



  


    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect()) //obtiene valores del display del parrafo
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            

               <blockquote className="blockquote text-right">
                    <p ref = {pTag}>{quote} </p>

                </blockquote>

            <Button
             variant="contained" 
             color="primary"
             onClick={increment}>
              Siguiente frase
            </Button>
            




        </div>
    )
}
