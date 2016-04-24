import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { createSocketIOMiddleware } from '../shared/middleware/socketIOMiddleware'
import createSagaMiddleware from 'redux-saga'
import { default as users } from './reducers/users'
import { ACCEPT_JOIN } from '../shared/actions/users'
import rootSaga from './sagas'; 

export const createBackendStore = webSocket => {
    const sagaMiddleware = createSagaMiddleware()
    
    const socketIOMiddleware = createSocketIOMiddleware(
        webSocket,
        [ ACCEPT_JOIN ]
    )
    
    const logger = createLogger({ 
        level: { 
            prevState: false, 
            action: 'log', 
            nextState: 'log', 
            error: 'warn' 
        }, 
        colors: {}
    })
    
    const store = createStore(
        combineReducers({ users }),
        applyMiddleware(sagaMiddleware, socketIOMiddleware, logger)
    )
    
    sagaMiddleware.run(rootSaga, store.getState)
    
    return store
};
