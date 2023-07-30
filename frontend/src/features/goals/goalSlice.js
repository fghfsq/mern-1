import {createSlice,createAsyncThunk} from '@reduxjs/toolkit' 
import goalService from './goalService'

const initialState = {
    goals:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:''
}

export const addGoal = createAsyncThunk('goal/addGoal',async(goalData,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token

        return await goalService.addGoal(token,goalData)
    }
    catch(err){
        const message = (err.response && err.response.data && err.response.data.message)
        || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const getAll = createAsyncThunk('goal/getAll',async(_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token

        return await goalService.getAll(token)

    }
    catch(err){
        const message = (err.response && err.response.data && err.response.data.message)
        || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const remove = createAsyncThunk('goal/remove',async(goalId,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token

        return await goalService.remove(token,goalId)
    }
    catch(err){
        const message = (err.response && err.response.data && err.response.data.message)
        || err.message || err.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const gaolSlice = createSlice({
    name:'goals',
    initialState,
    reducers:{
        reset:()=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addGoal.pending,(state)=>{
            state.isLoading =true
        })
        .addCase(addGoal.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.goals.push(action.payload)
        })
        .addCase(addGoal.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getAll.pending,(state)=>{
            state.isLoading =true
        })
        .addCase(getAll.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.goals = action.payload
        })
        .addCase(getAll.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(remove.pending,(state)=>{
            state.isLoading =true
        })
        .addCase(remove.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(remove.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export default gaolSlice.reducer
export const {reset} = gaolSlice.actions