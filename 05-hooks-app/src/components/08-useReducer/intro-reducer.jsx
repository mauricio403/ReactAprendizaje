
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];


const todoReducer = (state = initialState, action) => {
   
    if (action?.type === 'agregar') {
        
        return [...state, action.payload] 
    }

    return state;
}

let todos = todoReducer();

//no usar el push cuando se trabaja en React

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}


todos = todoReducer( todos, agregarTodoAction);


console.log(todos);