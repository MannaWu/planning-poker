import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { default as votes } from './ducks/votes'


export const store = createStore(
    combineReducers({votes}),
    applyMiddleware(createLogger())
)
