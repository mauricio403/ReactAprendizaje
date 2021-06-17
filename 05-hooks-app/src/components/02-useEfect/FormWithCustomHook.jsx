import React, { useEffect } from 'react'
// import { useState } from 'react';

import './effects.css';
import TextField from '@material-ui/core/TextField'
import { useForm } from '../../hooks/useForm';
import Button from '@material-ui/core/Button'




export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

        useEffect( () => {
            console.log('El email cambio')
        }, [email])


        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formValues)
        }



    return (
        <form onSubmit= {handleSubmit}> 
         <h1>FormWithCustomHook</h1>
         <hr />   

        <div className="form-group">
            <TextField
              id="standard-basic"
              label="Tu nombre"
              type='text'
              name="name"
              className="form-control"
            autoComplete="off"
            value={ name}
            onChange={ handleInputChange }
            />
        </div>


        <div className="form-group">
            <TextField
              id="standard-basics"
              label="email@xxx.com"
              type='text'
              name="email"
              className="form-control"
            autoComplete="off"
            value={ email}
            onChange={ handleInputChange }
            />
        </div>

        <div className="form-group">
            <TextField
              id="standard-basicsd"
              label="Password"
              type='password'
              name="password"
              className="form-control"
         
            value={ password }
            onChange={ handleInputChange }
            />
        </div>
        <hr />
        <Button 
        type="submit"
         className="btn btn-primary" 
         variant="contained" 
         color="secondary"
         >
          Guardar
        </Button>


        </form>
    )
}
