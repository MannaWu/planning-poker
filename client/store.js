import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reduxThunk from 'redux-thunk';
import { default as votes } from './ducks/votes'
import { default as user } from './ducks/user'

export const store = createStore(
    combineReducers({ votes, user }),
    applyMiddleware(createLogger(), reduxThunk)
)
