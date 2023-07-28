const jwt = require('jsonwebtoken')
const User = require('../models/User')

const checkAuth = async(req,res,next)=>{
    const token = (req.headers.authorization || '').split(' ')[1]

    if(token){
        try{

            const decoded = jwt.verify(token,process.env.token)

            req.userId = decoded

            next()
        }
        catch(err){
            console.log(err)
            res.status.json({message:'pizdec token'})
        }
    }
    else{
        return console.log('net nihuyz tokena')
    }
}

module.exports = checkAuth