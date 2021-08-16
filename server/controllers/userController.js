const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const { User, Basket } = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}


class UserController {
    async registration(req, res, next) {
        const { name, lastName, email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('invalid email or password'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('user exsist'))
        }
        try {
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({ name, lastName, email, role, password: hashPassword })
            const basket = await Basket.create({ userId: user.id })
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({ token })

        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiErroe.badRequest('user already exist'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        console.log(user.role)
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('wrong password'))
        }
        return res.json({ token })
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        res.json({ token })
    }
}

module.exports = new UserController()