import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import { default as votes } from './reducers/votes'
import { default as user } from './reducers/user'
import { default as users } from './reducers/users'
import { createSocketIOMiddleware } from '../shared/middleware/socketIOMiddleware'
import { REQUEST_JOIN } from '../shared/actions/users'
import { CAST_VOTE } from '../shared/actions/votes'

export const createFrontEndStore = webSocket => {
    
    const socketIOMiddleware = createSocketIOMiddleware(
        webSocket,
        [ REQUEST_JOIN, CAST_VOTE ]
    )

    const logger = createLogger()

    return createStore(
        combineReducers({ votes, user, users }),
        applyMiddleware(reduxThunk, socketIOMiddleware, logger)
    )
}
