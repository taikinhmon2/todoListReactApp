import { createSelector } from "reselect";
// const TODOLIST = (state) => {
//     console.log(state);
//     const NewTodoList = state.todoList.filter((todo)=>{
//         return todo.includes(state.fillter.search)
//     })
//     return NewTodoList
// }
// export {TODOLIST}
const TodoList = (state) => state.todoList
const filterSearch = (state) => state.fillter.search
const filterStatus = (state) => state.fillter.complete
const todoRemaining = createSelector(TodoList,filterSearch,filterStatus,(listTodo,searchText,status)=> {
    localStorage.setItem('todoList',JSON.stringify(listTodo))
    const NewTodoList = listTodo.filter((todo)=> {
        if(status === 'ALL') {
            return todo.nameJob.includes(searchText)
        }
        return (todo.nameJob.includes(searchText)) && (status === 'COMPLETED'? todo.complete : !todo.complete)
    })
    return NewTodoList
})
export {todoRemaining} 
