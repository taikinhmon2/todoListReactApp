import todoSlide from "../Component/TodoList/todoSlide"
import filterSlide from "../Component/Filter/filterSlide"
const RootReducer = (state = {} , action) => {
    return {
        fillter:filterSlide(state.fillter, action),
        todoList: todoSlide(state.todoList,action)
    }
}
export default RootReducer