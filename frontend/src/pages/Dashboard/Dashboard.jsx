import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Dashboard = ()=>{

    const navigate = useNavigate()

    const {user} = useSelector(state=>state.auth)


    useEffect(()=>{

        if(!user){
            navigate('/login')
        }

    },[navigate,user])

    return(
        <div>
         {user?(<h1>{user.name}</h1>):(<h1>elda</h1>)}
        </div>
    )
}

export default Dashboard