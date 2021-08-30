const ApiError = require('../error/apiError')
const { Basket, BasketItem } = require('../models/models')

class BasketController {
    async create(req, res, next) {
        try {
            let { basketId, productId } = req.body
            const basketItem = await BasketItem.create({ basketId, productId })
            return res.json(basketItem)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }



    async getBasket(req, res) {
        const { id } = req.params
        try {

            const basket = await Basket.findOne(
                {
                    where: { id },
                    include: [{ model: BasketItem, as: 'item' }]
                }
            )
            return res.json(basket)

        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            const { basketId, productId, itemId } = req.query
            console.log(basketId, productId, itemId)
            const basket = await BasketItem.destroy({
                where: { id: itemId, basketId, productId }
            })
            return res.json(basket)
        } catch (e) {
            console.log(e)
        }

    }
}

module.exports = new BasketController()