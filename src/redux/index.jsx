import { combineReducers, createStore } from 'redux'
import { BasketReducer } from './reducers/BasketReducer'
import { UserReducer } from './reducers/userReducer'
import { ItemsReducer } from './reducers/itemsReducer'

export const rootReducer = combineReducers({
    BasketReducer,
    UserReducer,
    ItemsReducer

})
