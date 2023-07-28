const {Router} = require('express')
const userController = require('../controllers/userController')
const validation = require('../validation')
const checkValidation = require('../utils/checkValidation')
const checkAuth = require('../utils/checkAuth')

const router = Router()

router.get('/getMe',checkAuth,userController.getMe)
router.post('/register',validation.registerValidation,checkValidation,userController.register)
router.post('/login',validation.loginValidation,checkValidation,userController.login)


module.exports = router