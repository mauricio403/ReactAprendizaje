import React from 'react'

export const Small = React.memo(( {value} ) => {

    console.log('Me volvi a llamar')

    return (
        <small>
            {value}
        </small>
    )
}
)


//la funcion memo velve a redibujar algo solo si las props cambian.