import { READ_BRAND, READ_TYPE } from "./types"

const initialState = {
    items: [],
    types: [],
    brands: []
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
        default: return state
    }
}