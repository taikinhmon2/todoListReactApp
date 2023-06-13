import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useDispatch } from "react-redux"
import './filter.css'
import { FilterTodo, FilterComplete } from "../../REDUX/action"
import { filterSlide } from "./filterSlide"
const completes = ['ALL','COMPLETED','TODO']
export const Filter = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const HandleSearch = (e) => {
        setSearch(e.target.value)
        dispatch(filterSlide.actions.search(e.target.value))
    }
    const [filterCom, setfilterCom] = useState('ALL')
    const HandleChange = (complete) => {
        setfilterCom(complete)
        dispatch(filterSlide.actions.complete(complete))
    }
   
    return (
        <div className="filter">
            <div className="search my-3 d-flex justify-content-center align-items-center">
                <label>Search</label>
                <input className= "mx-4" value={search} onChange = {HandleSearch} placeholder="Tìm kiếm" />
                <FontAwesomeIcon  icon={faMagnifyingGlass}/>
            </div>
            <div className="complete my-4 d-flex justify-content-around align-items-center">
               {completes.map((complete, id) => {
                return (<div key={id}> 
                <input className="me-3" type='radio'
                checked = {complete === filterCom}
                onChange = {() => {HandleChange(complete)}}
                /> 
                {complete}</div>)
               })}
            </div>
        </div>
    )
}
