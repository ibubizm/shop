import { $host, $authHost } from './index'

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const fetchProduct = async (brandId, typeId, page, limit) => {
    const { data } = await $host.get('api/product', { params: { brandId, typeId, page, limit } })
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}
