import { ADD_TO_BASKET, TOTAL_PRICE, TOTAL_COUNT, DELETE_FROM_CART } from "./types"

export function addItem(item) {
    return {
        type: ADD_TO_BASKET,
        payload: item
    }
}

export function totalCount() {
    return {
        type: TOTAL_COUNT,
        // payload: count
    }
}

export function totalPrice() {
    return {
        type: TOTAL_PRICE,
    }
}

export function deleteFromCart(list) {
    return {
        type: DELETE_FROM_CART,
        payload: list
    }
}