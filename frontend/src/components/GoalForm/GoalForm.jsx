import React,{useState,useEffect} from "react"
import {addGoal} from '../../features/goals/goalSlice'
import { useDispatch } from "react-redux"

const GoalForm = () =>{

    const dispatch = useDispatch()

    const [text,setText] = useState('')

    const onChange = (e) =>{
        setText(e.target.value)
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        if(text===''){
            return console.log('elban')
        }
        else{
            dispatch(addGoal({text}))
            setText("")
        }
       
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" 
                name='text'
                id="text"
                value={text}
                placeholder="huy"
                onChange={onChange}/>
            </form>
            <button type='submit' onClick={onSubmit}>submit</button>
        </div>
    )
}

export default GoalForm