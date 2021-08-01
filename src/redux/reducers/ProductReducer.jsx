import { ADD_TO_BASKET, TOTAL_PRICE, TOTAL_COUNT, DELETE_FROM_CART } from "./types"
const initialState = {
    items: [],
    count: 0,
    price: 0
}

export function ProductReducer(state = initialState, action) {
    switch (action.type) {


        case ADD_TO_BASKET:
            // const allObjInCart = [].concat.apply([], Object.values([...state.items]))
            return {
                ...state,
                items: [...state.items, action.payload],
            }


        case TOTAL_PRICE:
            const price = [...state.items].reduce((sum, obj) => Number(obj.price) + sum, 0)
            return {
                ...state,
                price
            }


        case TOTAL_COUNT:
            return {
                ...state,
                count: [...state.items].length
            }


        case DELETE_FROM_CART:
            // const allObjInCart = [].concat.apply([], Object.values([...state.items]))
            return {
                ...state,
                items: action.payload,
                price: [...state.items].reduce((sum, obj) => Number(obj.price) + sum, 0),
                count: [...state.items].length
            }


        default: return state
    }
}