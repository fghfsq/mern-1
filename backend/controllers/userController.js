const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async(req,res) =>{
    try{
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const doc = new User({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword
        })

        const user = await doc.save()

        const token = jwt.sign({
            _id:user._id
        },process.env.token,{
            expiresIn:'30d'
        })

        const {passwordHash,...userData} = user._doc

        res.json({
            ...userData,
            token
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'pizdec register'})
    }
}
const login = async(req,res) =>{
    try{

        const user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(400).json({message:'net nihuya'})
        }

        const valid = await bcrypt.compare(req.body.password,user.password)

        if(!valid){
            return res.status(400).json({message:'ne tot'})
        }
        
        const token = jwt.sign({
            _id:user._id
        },process.env.token,{
            expiresIn:'30d'
        })

        const {passwordHash,...userData} = user._doc

        res.json({
            ...userData,
            token
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'login'})
    }
}
const getMe = async(req,res) =>{
    try{
        const user = await User.findById(req.userId)

        if(!user){
            return res.status(400).json({message:'net nihuya'})
        }
        
        res.json(user)
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