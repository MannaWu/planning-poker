import React from 'react'
import { Card, CardTitle, CardText } from 'react-toolbox'
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
    votes: state.votes
})
    
const _Votes = ({ votes }) => {
    console.log(votes);
    console.log(votes.size);
    console.log([...votes]);
    return <CardText style={{ display: 'flex' }}>
        {[...votes].map(([name, value]) => <Vote key={name} name={name} value={value} />)}
    </CardText>
        
}
export const Votes = connect(mapStateToProps)(_Votes)
