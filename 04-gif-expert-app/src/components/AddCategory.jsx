import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputvalue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputvalue.trim().length> 2 ){
         setCategories(cats => [ inputvalue , ...cats ])
         setInputValue ('');
        }

        
    }
    return (
       
        <form onSubmit={handleSubmit}>
            
            <TextField 
                id="outlined-basic" 
                label="Añade un nuevo anime" 
                variant='outlined'
                type="text"
                value={inputvalue}
                onChange={ handleInputChange }
            />
        </form>
        
      
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}