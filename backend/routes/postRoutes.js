const {Router} = require('express')
const postController = require('../controllers/postController')
const validation = require('../validation')
const checkValidation = require('../utils/checkValidation')
const checkAuth = require('../utils/checkAuth')

const router = Router()

router.get('/',checkAuth,postController.getAll)
router.post('/',checkAuth,validation.addPostValidation,checkValidation,postController.addPost)
router.delete('/:id',checkAuth,postController.remove)

module.exports = router