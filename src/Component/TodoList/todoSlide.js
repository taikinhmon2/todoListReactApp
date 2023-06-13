// const initValue = [
    // {
    //     id: 1,
    //     nameJob: 'nhảy dây',
    //     complete: true
    // },
    // {
    //     id: 4,
    //     nameJob: 'nhảy dù',
    //     complete: false
    // },
    // {
    //     id: 2,
    //     nameJob: 'nhảy dance',
    //     complete: false
    // },
    // {
    //     id:3,
    //     nameJob: 'nhảy lò cò',
    //     complete: true
    // },
// ]
// const todoSlide = (state = initValue, action) => {
//     switch (action.type) {
//         case 'todolist/addtodo':
//             return [...state,action.payload]
//         default:
//             return state
//     }

// }
// export default todoSlide
import { createSlice } from "@reduxjs/toolkit";
export const todoSlide = createSlice({
    name: 'todo',
    initialState: JSON.parse(localStorage.getItem('todoList')) || [],
    // [
    //     {
    //         id: 1,
    //         nameJob: 'nhảy dây',
    //         complete: true
    //     },
    //     {
    //         id: 4,
    //         nameJob: 'nhảy dù',
    //         complete: false
    //     },
    //     {
    //         id: 2,
    //         nameJob: 'nhảy dance',
    //         complete: false
    //     },
    //     {
    //         id:3,
    //         nameJob: 'nhảy lò cò',
    //         complete: true
    //     },
    // ],
    reducers: {
        add: (state,action)=> {
            state.push(action.payload)
        },
        check: (state,action) => {
           let currentTodo =  state.find((todo)=> {
                return todo.id === action.payload
            })
            currentTodo.complete = !currentTodo.complete
        }
    }
})