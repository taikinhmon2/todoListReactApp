import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Filter } from './Component/Filter/filter';
import Todolists from './Component/TodoList/todolist';
import { Addtodo } from './REDUX/action';
import { todoRemaining } from './REDUX/selector';
import { todoSlide } from './Component/TodoList/todoSlide';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const dispatch = useDispatch()
  const TodoLists = useSelector(todoRemaining)
  const [nameJob, setnameJob] = useState('')
  const HandleNamejob = (e) => {
    setnameJob(e.target.value)
  }
  const Handleadd = () => {
    dispatch(todoSlide.actions.add({
      id: uuidv4(),
      nameJob: nameJob,
      complete: false
    }))
    setnameJob('')
  }
  return (
    <div className='app container mt-4 '>
      <h1 className='text-center'>TODO APP REDUX</h1>
      <Filter />
      <Todolists namejob={TodoLists} />
      {/* <div className='create'>
        <input value={nameJob}  onChange = {HandleNamejob}/>
        <button onClick={Handleadd}>ADD</button>
      </div> */}
      <div className="mb-3">
        <label htmlFor="btAdd" className="form-label fw-bold">Thêm công việc cần note</label>
        <input type="text" className="form-control" id="btAdd" value={nameJob} onChange={HandleNamejob}/>
        <button  className="btn btn-primary mt-3" onClick={Handleadd}>Thêm</button>
      </div>

    </div>
  )

}

export default App;
