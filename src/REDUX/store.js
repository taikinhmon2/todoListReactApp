// import { createStore} from 'redux'
// import RootReducer from './Reducer'
// const store = createStore(RootReducer)
// export {store}
import {filterSlide} from "../Component/Filter/filterSlide";
import {todoSlide} from "../Component/TodoList/todoSlide";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: {
        fillter:filterSlide.reducer,
        todoList: todoSlide.reducer
    }
})
export {store}