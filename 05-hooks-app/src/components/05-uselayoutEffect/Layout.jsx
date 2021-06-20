import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import './effects.css';
import Button from '@material-ui/core/Button'
import { useCounter } from '../../hooks/useCounter';


export const Layout = () => {

   const {counter, increment} =  useCounter(1);

   const { data }  =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   

    const { quote} = !!data && data[0]

    console.log( quote)

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            

               <blockquote className="blockquote text-right">
                    <p >{quote} </p>

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
