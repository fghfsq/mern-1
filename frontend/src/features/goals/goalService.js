import axios from 'axios'

const API_URL = '/api/posts/'

const addGoal = async(token,goalData)=>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
   
    const goal = await axios.post(API_URL,goalData,config)

    return goal.data
}
const getAll = async(token)=>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const goals = await axios.get(API_URL,config)

    return goals.data
}
const remove = async(token,goalId)=>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const goal = await axios.delete(API_URL+goalId,config)

    return goal.data
}

const goalService = {
    addGoal,
    getAll,
    remove
}

export default goalService