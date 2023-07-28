const {Router} = require('express')
const postController = require('../controllers/postController')
const validation = require('../validation')
const checkValidation = require('../utils/checkValidation')

const router = Router()

router.get('/',postController.getAll)
router.post('/',validation.addPostValidation,checkValidation,postController.addPost)
router.delete('/:id',postController.remove)

module.exports = router