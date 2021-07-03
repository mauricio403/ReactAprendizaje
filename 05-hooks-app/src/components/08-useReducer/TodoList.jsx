import React from 'react'
import Button from '@material-ui/core/Button'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <div>
            
            <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li 
                                key={todo.id}
                                className="list-group-item"
                                >
                                <p 
                                className={`${ todo.done && 'complete' }`}
                                onClick={() => handleToggle(todo.id)}
                                >
                                    { i + 1}. {todo.desc}</p>

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
    )
}
