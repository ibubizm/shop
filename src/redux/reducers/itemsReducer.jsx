import { READ_BRAND, READ_TYPE, CURRENT_BRAND, CURRENT_TYPE } from "./types"

const initialState = {
    items: [],
    types: [],
    brands: [],
    brandId: null,
    typeId: null
}

export function ItemsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LIST':
            return {
                ...state,
                items: action.payload
            }
        case READ_TYPE:
            return {
                ...state,
                types: action.payload
            }
        case READ_BRAND:
            return {
                ...state,
                brands: action.payload
            }
        case CURRENT_BRAND:
            return {
                ...state,
                brandId: action.payload
            }
        case CURRENT_TYPE:
            return {
                ...state,
                typeId: action.payload
            }
        default: return state
    }
}