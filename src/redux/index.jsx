import { combineReducers, createStore } from 'redux'
import { ProductReducer } from './reducers/ProductReducer'
import { UserReducer } from './reducers/userReducer'
import { ItemsReducer } from './reducers/itemsReducer'

export const rootReducer = combineReducers({
    ProductReducer,
    UserReducer,
    ItemsReducer

})
