import { createStore as createReduxStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { createSocketIOMiddleware } from './middleware/socketIOMiddleware'

export const createStore = (reducerMap, rootSaga, broadcastActionList, webSocket, loggerConfig) => {
    const sagaMiddleware = createSagaMiddleware()
    
    const socketIOMiddleware = createSocketIOMiddleware(webSocket, broadcastActionList)
    const logger = createLogger(loggerConfig)
    
    const store = createReduxStore(
        combineReducers(reducerMap),
        applyMiddleware(reduxThunk, sagaMiddleware, socketIOMiddleware, logger)
    )
    
    if (rootSaga) {
        sagaMiddleware.run(rootSaga, store.getState)        
    }
    
    return store
}