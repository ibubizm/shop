import { READ_BRAND, COUNT_ITEMS_PAGE, LIMINT_ON_PAGE, CURRENT_PAGE, READ_TYPE, CURRENT_BRAND, CURRENT_TYPE } from "./types"

const initialState = {
    items: [],
    types: [],
    brands: [],
    brandId: null,
    typeId: null,
    currentPage: 1,
    limitOnPage: 3,
    count: 0
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

        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case LIMINT_ON_PAGE:
            return {
                ...state,
                limitOnPage: action.payload
            }
        case COUNT_ITEMS_PAGE:
            return {
                ...state,
                count: action.payload
            }
        default: return state
    }


}