import { combineReducers, createStore } from 'redux'
import ProductReducer from './reducers/ProductReducer'

const root = combineReducers({
    ProductReducer
})

const store = createStore(root, 0)