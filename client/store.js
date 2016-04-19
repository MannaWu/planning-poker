import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import { default as votes } from './reducers/votes'
import { default as users } from './reducers/users'
import socketIO from 'socket.io-client' 
import { createSocketIOMiddleware } from './middleware/socketIOMiddleware'
import { REQUEST_JOIN } from '../shared/actions/users'
import { CAST_VOTE } from '../shared/actions/votes'

export const createFrontEndStore = () => {
    const socketIOMiddleware = createSocketIOMiddleware(
        socketIO(),
        [ REQUEST_JOIN, CAST_VOTE ]
    )

    const logger = createLogger()

    return createStore(
        combineReducers({ votes, users }),
        applyMiddleware(reduxThunk, socketIOMiddleware, logger)
    )
}
