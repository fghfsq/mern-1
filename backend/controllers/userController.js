const register = async(req,res) =>{
    try{
        res.status(200).json({message:'register'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'pizdec register'})
    }
}
const login = async(req,res) =>{
    try{
        res.status(200).json({message:'login'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'login'})
    }
}
const getMe = async(req,res) =>{
    try{
        res.status(200).json({message:'getMe'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'pizdec getMe'})
    }
}

const userController = {
    register,
    login,
    getMe
}

module.exports = userController