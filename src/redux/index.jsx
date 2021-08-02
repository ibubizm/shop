import { combineReducers, createStore } from 'redux'
import { ProductReducer } from './reducers/ProductReducer'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
    ProductReducer,

})
