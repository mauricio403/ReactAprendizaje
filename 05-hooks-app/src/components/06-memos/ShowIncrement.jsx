import React from 'react'
import Button from '@material-ui/core/Button'

export const ShowIncrement = React.memo(({increment}) => {


    console.log('Me volvi a generar :(')
    return (
        <div>
            <Button 
            variant="outlined"
             color="default"
             onClick={()=> {
                increment()
             }}>
              Incrementar
            </Button>
        </div>
    )
}
)