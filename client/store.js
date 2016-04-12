import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

export const castVote = (player, value) => ({
    type: 'CAST_VOTE',
    player,
    value
});

const votes = (state = {}, action) => {
    switch (action.type) {
        case 'CAST_VOTE':
            return Object.assign({}, state, {[action.player]: action.value} )
        default:
            return state
    }
}

export const store = createStore(
    votes,
    applyMiddleware(createLogger())
)
