import React from 'react'
import { ProgressBar } from 'react-toolbox'
import { connect } from 'react-redux'
    
const mapStateToProps = state => ({
    value: Object.keys(state).length
})

export const VotesProgressBar = connect(mapStateToProps)(ProgressBar)
