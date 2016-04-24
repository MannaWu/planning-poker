import React from 'react'
import { Layout, Panel, AppBar } from 'react-toolbox'
import { Game } from './Game'
import { Players } from './Players'
import { Login } from './Login'
import { connect } from 'react-redux'

const playerCount = 8
const choices = [ 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?', 'Pass' ]

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn
})

const _Main = (props) => (
    <Layout>
        <Panel>
            <AppBar></AppBar>
            <div style={{ padding: 20 }}>
                <h1>Planning Poker</h1>
                { props.loggedIn ?
                    <div> 
                        <Game title='#6688' subtitle='Feed the panda' choices={choices} playerCount={playerCount} />
                        <Players />
                    </div> :
                    <Login /> 
                }
            </div>
        </Panel>
    </Layout>
)

export const Main = connect(mapStateToProps)(_Main)
