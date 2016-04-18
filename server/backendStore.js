import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { default as users } from './reducers/users'

export const createBackendStore = () => createStore(
    combineReducers({ users }),
    applyMiddleware(createLogger())
)
