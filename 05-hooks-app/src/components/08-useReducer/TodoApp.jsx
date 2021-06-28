import { todoReducer } from './todoReducer';
import React from 'react';
import { useReducer } from 'react';
import './styles.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';




// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'aprender react',
//     done: false

// }];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'aprender react',
    //     done: false
    
    // }];
    
}


export const TodoApp = () => {


    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });


    //guarda cada vez que los todos cambian y se dispara el use effect

   useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])

 const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        //dispatch

        dispatch(action)
 }


 const hanldeToggle = (todoId) => {

    dispatch({
        type: 'toggle',
        payload: todoId
    })

 }



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


        const action  = {
            type: 'add',
            payload: newTodo
            
        }
        dispatch(action);
        reset();


    }



    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li 
                                key={todo.id}
                                className="list-group-item"
                                ><p 
                                className={`${ todo.done && 'complete' }`}
                                onClick={() => hanldeToggle(todo.id)}
                                >{ i + 1}. {todo.desc}</p>

                                    <Button 
                                    variant="outlined" 
                                    color="primary"
                                    onClick = {() => handleDelete(todo.id)}
                                    >
                                    Borrar Tarea
                                    </Button>

                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div  className="col-5">
                  

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
                </div>

            </div>

            

        </div>
    )
}
