import React, { useEffect, useState } from 'react'
import {register} from '../../features/auth/authSlice'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reset } from '../../features/auth/authSlice'

const Register = ()=>{

    const [form,setForm] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {user,isLoading,isError,isSuccess,message} = useSelector(state=>state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {name,email,password,password2} = form

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
        
        if(password!==password2){
            return alert('nihuya ne pravilno')
        }
        else{
        const data = {
            name,
            email,
            password
        }

        dispatch(register(data))
        }
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type ='text'
                    id='name'
                    name='name'
                    placeholder='enter name blyad'
                    value={name} 
                    onChange={onChange}/>
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
                <input 
                    type ='password'
                    id='password2'
                    name='password2'
                    placeholder='enter password blyad'
                    value={password2} 
                    onChange={onChange}/>
                </form>
                <button onClick={onSubmit}>submit</button>
        </div>
    )
}

export default Register