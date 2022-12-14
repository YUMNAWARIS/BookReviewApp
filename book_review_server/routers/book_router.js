const {Router} = require('express')
const book_controller = require('../controllers/book_controller')
const auth = require('../Middleware/auth')

const router = Router()

router.post('/', auth , book_controller.post_book)
router.put('/:id', auth, book_controller.update_book)

// search
router.get('/mybooks', auth, book_controller.mybooks)
router.get('/mylikes', auth, book_controller.mylikes)
router.get('/:id', book_controller.get_one)
router.get('/', book_controller.get_all)

module.exports = router