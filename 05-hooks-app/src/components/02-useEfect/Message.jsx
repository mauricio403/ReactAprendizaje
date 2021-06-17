import React, { useEffect } from 'react'
import { useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x:0, y:0})

    const {x, y } = coords;

    useEffect(() => {

        const mauseMove = (e)=> {
            const coors = {
                x: e.x,
                y: e.y
            };
            setcoords(coors);
        }
       
        window.addEventListener('mousemove', mauseMove);


        return () => {
        // console.log('componente desmontado')
        window.removeEventListener('mousemove', mauseMove)

        }
    }, [])

    return (
        <div>
            <h3>eres genial!</h3>
            <p>
                x: {x} y : {y}
            </p>
        </div>
    )
}
