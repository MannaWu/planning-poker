import React from 'react'
import { Layout, Panel, AppBar } from 'react-toolbox'
import { Game } from './Game'

const playerCount = 8
const votes = [ 
    { name: 'Daisy', value: 8 },
    { name: 'Zsolt', value: 13 } 
]
const choices = [ 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?', 'Pass' ]

export default () => (
    <Layout>
        <Panel>
            <AppBar></AppBar>
            <div style={{ padding: 20 }}>
                <h1>Planning Poker</h1>
                <Game
                    title='#6688'
                    subtitle='Feed the panda'
                    votes={votes}
                    choices={choices}
                    playerCount={8}
                />
            </div>
        </Panel>
    </Layout>
)
