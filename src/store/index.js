import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { counterReducer } from './counterReducer'

const rootReducer = combineReducers({
    count: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))