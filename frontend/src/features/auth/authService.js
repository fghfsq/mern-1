import axios from 'axios'

const API_URL = '/api/users/'

const register = async(userData)=>{
    const user = await axios.post(API_URL+'register',userData)

    if(user.response){
        localStorage.setItem('user',JSON.stringify(user.response))
    }

    return user.response
}
const login = async(userData)=>{
    const user = await axios.post(API_URL+'login',userData)

    if(user.response){
        localStorage.setItem('user',JSON.stringify(user.response))
    }
    
    return user.response
}

const authService = {
    register,
    login
}

export default authService