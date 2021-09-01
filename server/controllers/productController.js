const uuid = require('uuid')
const path = require('path')
const { Product, ProductInfo } = require('../models/models')
const ApiError = require('../error/apiError')


class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({ name, price, typeId, brandId, img: fileName })
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    }))
            }
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        try {
            let { brandId, typeId, limit, page } = req.query
            limit = limit || 10
            page = page || 1
            let offset = page * limit - limit
            let product

            if (!brandId && !typeId) {
                product = await Product.findAndCountAll({ limit, offset })
                return res.json(product)
            }
            if (!brandId && typeId) {
                product = await Product.findAndCountAll({ where: { typeId }, limit, offset })
                return res.json(product)
            }
            if (brandId && !typeId) {
                product = await Product.findAndCountAll({ where: { brandId }, limit, offset })
                return res.json(product)
            }
            if (brandId && typeId) {
                product = await Product.findAndCountAll({ where: { brandId, typeId }, limit, offset })
                return res.json(product)
            }

        } catch (e) {
            console.log(e)
        }

    }

    async getOne(req, res) {
        const { id } = req.params
        const product = await Product.findOne(
            {
                where: { id },
                include: [{ model: ProductInfo, as: 'info' }]
            })
        return res.json(product)
    }

}

module.exports = new ProductController()