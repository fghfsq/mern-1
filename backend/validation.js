const {body} =require('express-validator')

const registerValidation = [
    body('name','pizdec name').isString().isLength({min:3}),
    body('email','pizdec email').isEmail(),
    body('password','pizdec password').isString().isLength({mig:3})
]
const loginValidation = [
    body('email','pizdec email').isEmail(),
    body('password','pizdec password').isString().isLength({mig:3})
]
const addPostValidation = [
    body('text','pizdec text').isString()
]

const validation = {
    registerValidation,
    loginValidation,
    addPostValidation
}

module.exports = validation