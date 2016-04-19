import React from 'react'
import { Button, CardActions } from 'react-toolbox'
import { castVote } from '../../shared/actions/votes'
import { connect } from 'react-redux'
    
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(castVote(ownProps.value))
})

const _Choice = ({ value, onClick }) =>
    value === 'Pass' ?
        <Button icon='local_cafe' accent onClick={onClick} /> :
        <Button label={value.toString()} accent onClick={onClick} />
    
export const Choice = connect(null, mapDispatchToProps)(_Choice)
    
export const Choices = ({ choices }) =>
    <CardActions>
        {choices.map((value, i) => <Choice key={i} value={value} />)}
    </CardActions>
