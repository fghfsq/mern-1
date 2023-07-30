import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Goals from "../../components/Goals/Goals"
import GoalForm from "../../components/GoalForm/GoalForm"
import Spinner from '../../components/Spinner/Spinner'
import {toast} from 'react-toastify'
import { getAll, reset } from "../../features/goals/goalSlice"

const Dashboard = ()=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector(state=>state.auth)
    const {goals,isLoading,isSuccess,isError,message} = useSelector(state=>state.goals)

    useEffect(()=>{

        if(!user){
            navigate('/login')
        }

        if(isError){
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        dispatch(getAll())
    },[goals,isError,isSuccess,navigate,user])

    return(
        <div>
         {user?(<h1>{user.name}</h1>):(<h1>elda</h1>)}
         <GoalForm />
         <Goals />
        </div>
    )
}

export default Dashboard