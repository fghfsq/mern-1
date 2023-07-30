import React from "react"
import { useDispatch } from "react-redux"
import { remove } from "../../features/goals/goalSlice"

const GoalItem = (props) =>{

    const goalId = props.goal._id

    const dispatch = useDispatch()

    const del = ()=>{
        dispatch(remove(goalId))
    }

    return(
        <div>
            <h1>{props.goal.text}</h1>
            <button onClick={del}>delete</button>
        </div>
    )
}

export default GoalItem