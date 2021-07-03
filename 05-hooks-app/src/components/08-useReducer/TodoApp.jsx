import { todoReducer } from './todoReducer';
import React from 'react';
import { useReducer } from 'react';
import './styles.css';
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
// import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';




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


 const handleToggle = (todoId) => {

    dispatch({
        type: 'toggle',
        payload: todoId
    })

 }


 const handleAddTodo = ( newTodo ) => {



    dispatch({
        type: 'add',
        payload: newTodo
    });
 }





    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                < TodoList
                
                todos = {todos}
                handleDelete = {handleDelete}
                handleToggle = {handleToggle}
                

                ></TodoList>

                </div>

                <div  className="col-5">
                  
                    <TodoAdd handleAddTodo={handleAddTodo} ></TodoAdd>
                   
                </div>

            </div>

            

        </div>
    )
}
