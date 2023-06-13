const Addtodo = (data) => {
    return {
        type: 'todolist/addtodo',
        payload: data
    }
}
const FilterTodo = (data) => {
    return {
        type: 'filter/todo',
        payload:data
    }
}
const FilterComplete = (data) => {
    return {
        type: 'filter/complete',
        payload: data
    }
}
export {Addtodo,FilterTodo,FilterComplete}