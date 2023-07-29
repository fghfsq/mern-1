import axios from 'axios'

const API_URL = '/api/goals/'

const addGoal = async(token,goalData)=>{
    const config = {
        Headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const goal = await axios.post(API_URL,config,goalData)

    return goal.response
}
const getAll = async(token)=>{
    const config = {
        Headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const goals = await axios.get(API_URL,config)

    return goals.response
}
const remove = async(token,goalId)=>{
    const config = {
        Headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const goal = await axios.delete(API_URL,config,goalId)

    return goal.response
}

const goalService = {
    addGoal,
    getAll,
    remove
}

export default goalService