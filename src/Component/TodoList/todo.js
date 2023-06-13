import { useState } from "react";
import {todoSlide} from './todoSlide'
import { useDispatch } from "react-redux";
const Todo = ({ nametodo, completed, id}) => {
    const dispatch = useDispatch()
    const [check, setCheck] = useState(completed)
    const checkJob = () => {
        setCheck((pre) => !pre )
        dispatch(todoSlide.actions.check(id))
    }
    return (
        <ul className="list-group">
            <li className={"list-group-item mb-2" + ' ' +`${completed ? 'text-decoration-line-through opacity-50' : ''}`} ><input type="checkbox" className="me-3" checked = {check} onChange={checkJob}/> {nametodo}</li>
        </ul>
    )
}
export default Todo