const {validationResult} = require('express-validator')

const checkValidation = (req,res,next)=>{
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json(errors.array())
        }

        next()
    }
    catch(err){
        console.log(err)
        res.status(500).json('pizdec checkValidation')
    }
}

module.exports = checkValidation