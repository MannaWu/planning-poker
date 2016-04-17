import test from 'ava'
import { CAST_VOTE, castVote } from './votes'

test('castVote() action creator', t => {
    const action = castVote('Judy Hopps', 8)
    const expected = { type: CAST_VOTE, player: 'Judy Hopps', value: 8 }
    t.deepEqual(action, expected, 'should create a plain JS object')
})

