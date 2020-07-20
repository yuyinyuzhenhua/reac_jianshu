import { createStore, compose, applyMiddleware } from 'redux'
import reducer  from './reducer'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk, reduxPromise)
 ))

export default store
