import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import './effects.css';
import Button from '@material-ui/core/Button'
import { useCounter } from '../../hooks/useCounter';


export const MultipleCustomHooks = () => {

   const {counter, increment} =  useCounter(1);

   const { loading, data }  =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   

    const {author, quote} = !!data && data[0]

    console.log(author, quote)

    return (
        <div>
            <h1>Breakingbad Quotes</h1>
            <hr />

            {
                loading ? (
                    <div className="alert alert-info tex-center">
                loading..
            </div>
                )
                :
                (

                <blockquote className="blockquote text-right">
                    <p >{quote} </p>

                    <footer className="blockquote-footer" >{author}</footer>
                </blockquote>
                )
            }

            <Button
             variant="contained" 
             color="primary"
             onClick={increment}>
              Siguiente frase
            </Button>
            




        </div>
    )
}
