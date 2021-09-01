import { $authHost } from './index'

export const createBasketItem = async (basketId, productId) => {
    const { data } = await $authHost.post('api/basket', { basketId, productId })
    return data
}

export const deleteItemFromBasket = async (basketId, productId, itemId) => {
    const { data } = await $authHost.delete('api/basket', { params: { basketId, productId, itemId } })
    return data
}

export const fetchBasket = async (id) => {
    const { data } = await $authHost.get('api/basket/' + id)
    return data
}

