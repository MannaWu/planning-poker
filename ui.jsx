import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './client/components/Main'
import 'react-toolbox/lib/commons'
import { Provider } from 'react-redux'
import { store } from './client/store'

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, 
    document.getElementById('content')
)
