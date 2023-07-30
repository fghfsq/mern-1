import axios from 'axios'

const API_URL = '/api/users/'

const register = async(userData)=>{
    const user = await axios.post(API_URL+'register',userData)

    if(user.data){

        localStorage.setItem('user',JSON.stringify(user.data))
    }

    return user.data
}
const login = async(userData)=>{
    const user = await axios.post(API_URL+'login',userData)

    if(user.data){
        localStorage.setItem('user',JSON.stringify(user.data))
    }
    
    return user.data
}
const logout = ()=>{
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService