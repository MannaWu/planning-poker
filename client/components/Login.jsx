import React from 'react'
import { Input, Button } from 'react-toolbox'
import { connect } from 'react-redux'
import { changeUserName, login } from '../ducks/user'

const mapStateToProps = state => ({
    value: state.user.name
})

const mapDispatchToProps = dispatch => ({
    onChange: name => dispatch(changeUserName(name)),
    onButtonClick: () => dispatch(login())
})

export const _Login = (props) => {
    return (
        <section>
            <Input type='text' label='Name' name='name' value={props.value} onChange={props.onChange} maxLength={16} />
            <Button label='Join' onClick={props.onButtonClick} />        
        </section>
    )
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)

