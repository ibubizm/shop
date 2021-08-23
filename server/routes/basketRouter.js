const Router = require('express')
const router = new Router()
const BasketController = require('../controllers/basketController')

router.post('/', BasketController.create)

module.exports = router