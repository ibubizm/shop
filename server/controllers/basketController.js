const { Basket } = require('../models/models')

class BasketController {
    async create(req, res, next) {
        let { name, price, userId } = req.body
        const basketItem = await Basket.create({ name, price, userId })
        return res.json(basketItem)
    }
}

module.exports = new BasketController()