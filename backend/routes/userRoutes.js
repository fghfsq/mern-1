const {Router} = require('express')
const userController = require('../controllers/userController')

const router = Router()

router.get('/getMe',userController.getMe)
router.post('/register',userController.register)
router.post('/login',userController.login)


module.exports = router