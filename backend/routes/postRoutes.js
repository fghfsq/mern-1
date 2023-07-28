const {Router} = require('express')
const postController = require('../controllers/postController')

const router = Router()

router.get('/',postController.getAll)
router.post('/',postController.addPost)
router.patch('/:id',postController.update)
router.delete('/:id',postController.remove)

module.exports = router