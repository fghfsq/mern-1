import React from "react"
import s from './Header.module.css'
import { Link } from "react-router-dom"
import { logout ,reset} from "../../features/auth/authSlice"
import { useDispatch } from "react-redux"


const Header = () =>{

    const dispatch = useDispatch()

    return(
    <div className={s.header}>
        <div className={s.conteiner}>
            <header className={s.header}>
                <h1 className={s.auth}>fsd</h1>
                <Link className={s.l} to={'/'}>Dasboard</Link>
                <Link className={s.l} to={'/register'}>Register</Link>
                <Link className={s.l} to={'/login'}>Login</Link>
                <button onClick={()=>{
                    dispatch(logout())
                    dispatch(reset())}}>logout</button>
            </header>
        </div>
    </div>
    )
}

export default Header