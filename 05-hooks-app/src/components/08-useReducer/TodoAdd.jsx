import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useForm } from '../../hooks/useForm'




export const TodoAdd = ({ handleAddTodo }) => {

    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length<=1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        //accion que sera enviada al reducer


        
        handleAddTodo(newTodo);
        reset();

    }

    return (
        <>
            <h4>Agregar TODO</h4>

            <hr />

            <form onSubmit={handleSubmit} >

                <TextField
                    type="text"
                    name="description"
                    label="Aprender ..."
                    className="form-control"
                    onChange={handleInputChange}
                    value={description}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className=" mt-1 "

                >
                    Agregar
                </Button>


            </form>
        </>
    )
}
