import Todo from "./todo"
const TodoLists =  ({namejob}) => {
    return (
        <div className="mb-4">
            {namejob.map((todo)=> {
                return <Todo
                key={todo.id} nametodo={todo.nameJob} completed = {todo.complete} id = {todo.id}/>
            })}
        </div>
    )
}
export default TodoLists

