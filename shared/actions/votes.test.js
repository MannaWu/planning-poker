import test from 'ava'
import sinon from 'sinon'
import { CAST_VOTE, castVote } from './votes'

test('castVote() action creator', t => {
    const action = castVote(8)
    const expected = { type: CAST_VOTE, player: 'Judy Hopps', value: 8 }
    const dispatch = sinon.spy()
    const getState = () => ({ users: { name: 'Judy Hopps' }})

    t.is(typeof(action), 'function', 'should create a function')    
    action(dispatch, getState)
    t.true(dispatch.calledWith(expected))
})

