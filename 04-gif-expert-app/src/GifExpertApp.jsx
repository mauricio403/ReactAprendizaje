import React from 'react'
// import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([ 'Dragon Ball'])

    // const handleAdd = () => {
    //     // setcategories( [...categories, 'alma de oro'] ); //primera froma de añadir
    //     setcategories(cats => [...cats, 'alma de oro']) //el cats es el valor de estado anterior y seeguido del nuevo

    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory  setCategories = { setCategories }></AddCategory>
            <hr />

       
            <ol>
                { 
                  categories.map( (category) => {
                    return <GifGrid 
                    key = {category}
                    category = {category}></GifGrid>
                  } )  
                }
            </ol>
        </>
    )
}
