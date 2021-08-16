import { USER_AUTH, USER_DATA } from "./types"


const initialState = {
    user: {},
    auth: false
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH:
            return {
                ...state,
                auth: action.payload
            }
        case USER_DATA:
            return {
                ...state,
                user: action.payload
            }
        default: return state
    }
}