import { $host, $authHost } from './index'

export const fetchBasket = async (id) => {
    const { data } = await $authHost.get('api/basket', { id })
    console.log(data)
    return data
}