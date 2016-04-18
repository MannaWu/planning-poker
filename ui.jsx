import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './client/components/Main'
import 'react-toolbox/lib/commons'
import { Provider } from 'react-redux'
import { createFrontEndStore } from './client/store'

ReactDOM.render(
    <Provider store={createFrontEndStore()}>
        <Main />
    </Provider>, 
    document.getElementById('content')
)
