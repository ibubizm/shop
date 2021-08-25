const Router = require('express')
const router = new Router()
const BasketController = require('../controllers/basketController')

router.post('/', BasketController.create)
router.get('/:id', BasketController.getBasket)
router.delete('/', BasketController.delete)
module.exports = router