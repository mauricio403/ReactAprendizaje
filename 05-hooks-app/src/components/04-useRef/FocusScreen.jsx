import React from 'react'
import './effects.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useRef } from 'react'



export const FocusScreen = () => {


    const inputRef = useRef();

    // console.log(ref)

    const handleClick = () => {

        inputRef.current.select();

    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <TextField
             inputRef = {  inputRef }
              id=""
              label="Su nombre"
            />

            <Button variant="contained" color="secondary" onClick={handleClick}>
              Focus
            </Button>
        </>
    )
}
