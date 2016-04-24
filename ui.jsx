import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './client/components/Main'
import 'react-toolbox/lib/commons'
import { Provider } from 'react-redux'
import socketIO from 'socket.io-client' 
import { createFrontEndStore } from './client/store'

const webSocket = socketIO()
const store = createFrontEndStore(webSocket)
webSocket.on('action', action => store.dispatch(action))

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, 
    document.getElementById('content')
)
