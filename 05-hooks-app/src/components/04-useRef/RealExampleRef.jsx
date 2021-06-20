import React, { useState } from 'react'
import './effects.css'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'
import Button from '@material-ui/core/Button'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)




    return (
        <>
            <h1>Real Example Ref</h1>

            <hr />

            { show && <MultipleCustomHooks></MultipleCustomHooks>}


            <Button 
            variant="outlined" 
            color="default"
            onClick = {() => {
                setShow(!show)
            }  }>
              Ocultar
            </Button>
                        
        </>
    )
}
