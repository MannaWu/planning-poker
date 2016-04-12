import React from 'react'
import { Card, CardTitle, CardText } from 'react-toolbox'
import { castVote } from '../store'
import { connect } from 'react-redux'

const Vote = ({ name, value }) => 
    <Card style={{ width: 80, textAlign: 'center', margin: 8 }}>
        <CardTitle
            style={{ textAlign: 'center', margin: 'auto' }}
            title={value.toString()}
            subtitle={name} 
        />
    </Card>

const mapStateToProps = state => ({
    votes: Object.keys(state).map(key => ({name: key, value: state[key]}))
})
    
const _Votes = ({ votes }) =>
    <CardText style={{ display: 'flex' }}>
        {votes.map(({ name, value }, i) => <Vote key={i} name={name} value={value} />)}
    </CardText>
        
export const Votes = connect(mapStateToProps)(_Votes)
