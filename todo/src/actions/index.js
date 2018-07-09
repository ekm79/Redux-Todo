import TodoForm from '../components/TodoForm';

const NEW_TODO = 'NEW_TODO';
const TODO_COMPLETED ='COMPLETED_TODO';
const FETCH_TODOS = 'FETCH_TODOS';

const todoList = ['item 1', 'item 2', 'item 3'];

export const fetchTodos = () => {
    return {
        type: FETCH_TODOS,
        payload: todoList
    }
}
export const newTodo = (props) => {
    return {
        type: NEW_TODO,
        payload: props.value
    }
}

export const completedTodo = (props => {
    return {
        type: TODO_COMPLETED,
        payload: props.completed
    }
})

export { NEW_TODO, TODO_COMPLETED, FETCH_TODOS, todoList }