import React from 'react'
import { Layout, Panel, AppBar } from 'react-toolbox'
import { Provider } from 'react-redux'
import { Game } from './Game'
import { store } from '../store'

const playerCount = 8
const choices = [ 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?', 'Pass' ]

export default () => (
    <Provider store={store}>
        <Layout>
            <Panel>
                <AppBar></AppBar>
                <div style={{ padding: 20 }}>
                    <h1>Planning Poker</h1>
                    <Game
                        title='#6688'
                        subtitle='Feed the panda'
                        choices={choices}
                        playerCount={8}
                    />
                </div>
            </Panel>
        </Layout>
    </Provider>
)
