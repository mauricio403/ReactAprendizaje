import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './effects.css';
import TextField from '@material-ui/core/TextField'
import { Message } from './Message';



export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email} = formState;


    useEffect(() => {
        // console.log('hey!')
        
    }, []);

    useEffect(() => {
        // console.log('formstate cambio!')
        
    }, [formState]);
    
    useEffect(() => {
        // console.log('Email cambio!')
        
    }, [email]);

    const handleInoutChange = ({target }) => {
       
        setformState({
            ...formState,
            [target.name]: target.value
        });
    }


    return (
        <>
         <h1>UseEffect</h1>
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
            onChange={ handleInoutChange }
            />
        </div>


        <div className="form-group">
            <TextField
              id="standard-basic"
              label="email@xxx.com"
              type='text'
              name="email"
              className="form-control"
            autoComplete="off"
            value={ email}
            onChange={ handleInoutChange }
            />
        </div>

        { (name==="123") &&  <Message></Message>}

        </>
    )
}
