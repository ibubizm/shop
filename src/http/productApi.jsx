import { $host, $authHost } from './index'
import jwt_decode from 'jwt-decode'

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const fetchProduct = async (brandId, typeId) => {
    const { data } = await $host.get('api/product', { params: { brandId, typeId } })
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}
