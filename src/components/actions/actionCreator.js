import { FETCH_TODO, ADD_TASK, DEL_TASK, TOGGLE_TASK} from '../actions/types'

export const fetchTodos = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(todos => dispatch({
        type: FETCH_TODO,
        payload: todos
    }))
}

export const addTodos = (todoData) => {
    return{
        type: ADD_TASK,
        payload: todoData

    }
}

export const delTodos = (task) => {
    return{
        type: DEL_TASK,
        payload: task.id
    }
}

export const toggleTodos = (task) => {
    return{
        type: TOGGLE_TASK,
        payload: task
    }
}
