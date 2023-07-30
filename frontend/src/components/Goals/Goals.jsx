import React from "react"
import GoalItem from "../GoalItem/GoalItem"
import { useSelector } from "react-redux"

const Goals = () =>{

    const {goals} = useSelector(state=>state.goals)

    return(
        <div>
          {goals?<div>{
          goals.map(goal=><GoalItem key={goal._id} goal={goal}/>)
          }</div>
          :(<h1>net nihuya</h1>)}
        </div>
    )
}

export default Goals