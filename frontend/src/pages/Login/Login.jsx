import React,{useState,useEffect} from 'react'
import { login } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from '../../components/Spinner/Spinner'
import { reset } from '../../features/auth/authSlice'

const Login = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form,setForm] = useState({
        email:'',
        password:'',
    })

    const {email,password} = form

    const {user,isLoading,isSuccess,isError,message} = useSelector(state=>state.auth)

    useEffect(()=>{
        if(user || isSuccess){
            navigate('/')
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
        dispatch(reset())

    },[isError,isSuccess,user,message,dispatch,navigate])

    if(isLoading){
        return(<Spinner />)
    }

    const onChange = (e)=>{
        setForm((state)=>{
            return {
                ...state,
                [e.target.name]:e.target.value
            }
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        
        const data = {
            email,
            password
        }

        dispatch(login(data))
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type ='email'
                    id='email'
                    name='email'
                    placeholder='enter email blyad'
                    value={email} 
                    onChange={onChange}/>
                <input 
                    type ='password'
                    id='password'
                    name='password'
                    placeholder='enter password blyad'
                    value={password} 
                    onChange={onChange}/>
                </form>
                <button onClick={onSubmit}>submit</button>
        </div>
    )
}

export default Login