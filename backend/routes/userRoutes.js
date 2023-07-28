const {Router} = require('express')
const userController = require('../controllers/userController')
const validation = require('../validation')
const checkValidation = require('../utils/checkValidation')

const router = Router()

router.get('/getMe',userController.getMe)
router.post('/register',validation.registerValidation,checkValidation,userController.register)
router.post('/login',validation.loginValidation,checkValidation,userController.login)


module.exports = router