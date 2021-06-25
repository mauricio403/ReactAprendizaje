import { todoReducer } from './todoReducer';
import React from 'react';
import { useReducer } from 'react';
import './styles.css';



const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender react',
    done: false

}]


export const TodoApp = () => {


    const [ todos ] = useReducer(todoReducer, initialState);

    console.log(todos)


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Carita</li>
                <li>Fachera</li>
                <li>Facherita</li>
            </ul>

            

        </div>
    )
}
