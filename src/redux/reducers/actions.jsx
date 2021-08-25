import { ADD_TO_BASKET, USER_DATA, TOTAL_PRICE, TOTAL_COUNT, DELETE_FROM_CART, USER_AUTH, READ_BRAND, READ_TYPE, CURRENT_BRAND, CURRENT_TYPE } from "./types"

export function addItem(item) {
    return {
        type: ADD_TO_BASKET,
        payload: item
    }
}

export function allItems(list) {
    return {
        type: 'ADD_LIST',
        payload: list
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

export function auth(bool) {
    return {
        type: USER_AUTH,
        payload: bool
    }
}

export function user(obj) {
    return {
        type: USER_DATA,
        payload: obj
    }
}

export function type(mas) {
    return {
        type: READ_TYPE,
        payload: mas

    }
}

export function brand(mas) {
    return {
        type: READ_BRAND,
        payload: mas
    }
}

export function current_brand(id) {
    return {
        type: CURRENT_BRAND,
        payload: id
    }
}

export function current_type(id) {
    return {
        type: CURRENT_TYPE,
        payload: id
    }
}
