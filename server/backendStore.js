import { createStore } from '../shared/store'
import { default as users } from './reducers/users'
import { ACCEPT_JOIN } from '../shared/actions/users'
import { RECEIVE_VOTE } from '../shared/actions/votes'
import rootSaga from './sagas'; 

const LOGGER_CONFIG = { 
    level: { 
        prevState: false, 
        action: 'log', 
        nextState: 'log', 
        error: 'warn' 
    }, 
    colors: {}
}

export const createBackendStore = webSocket => createStore(
    {users},
    rootSaga,
    [ ACCEPT_JOIN, RECEIVE_VOTE ],
    webSocket,
    LOGGER_CONFIG
)
