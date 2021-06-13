import React from 'react'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Saint Seya', 'Dragon Ball']

    const [categories, setcategories] = useState(['One Punch', 'Saint Seya', 'Dragon Ball'])

    const handleAdd = () => {
        // setcategories( [...categories, 'alma de oro'] ); //primera froma de añadir
        setcategories(cats => [...cats, 'alma de oro']) //el cats es el valor de estado anterior y seeguido del nuevo

    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

        <Button variant="contained" color="primary" onClick={handleAdd}>Agregar</Button>
            <ol>
                { 
                  categories.map( (category)=> {
                    return <li key={category}> {category}</li>
                  } )  
                }
            </ol>
        </>
    )
}
