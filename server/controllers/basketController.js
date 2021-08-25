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
        // const {id} = req.params
        let id = 13
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
        const { id } = req.query
        const basket = await BasketItem.destroy({
            where: { id }
        })
        return res.json(basket)
    }
}

module.exports = new BasketController()