const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const BasketController = require('../controllers/basketController')

router.post('/', authMiddleware, BasketController.create)
router.get('/:id', BasketController.getBasket)
router.delete('/', authMiddleware, BasketController.delete)
module.exports = router