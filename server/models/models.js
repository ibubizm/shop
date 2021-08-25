const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const BasketItem = sequelize.define('basket_item', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
})

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 }
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rating: { type: DataTypes.INTEGER, unique: true, allowNull: false }
})

const ProductInfo = sequelize.define('product_info', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
})

const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
})

User.hasOne(Basket, { onDelete: 'CASCADE' })
Basket.belongsTo(User)

User.hasMany(Rating, { onDelete: 'CASCADE' })
Rating.belongsTo(User)

Basket.hasMany(BasketItem, { as: 'item', onDelete: 'CASCADE' })
BasketItem.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Product.hasMany(Rating, { onDelete: 'CASCADE' })
Rating.belongsTo(Product)

Product.hasMany(BasketItem, { onDelete: 'CASCADE' })
BasketItem.belongsTo(Product)

Product.hasMany(ProductInfo, { as: 'info', onDelete: 'CASCADE' })
ProductInfo.belongsTo(Product)


Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })


module.exports = {
    User,
    Basket,
    BasketItem,
    Product,
    ProductInfo,
    Type,
    Brand,
    Rating,
    TypeBrand
}