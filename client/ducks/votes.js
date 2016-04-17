export const CAST_VOTE = 'planning-poker/vote/cast'

export default (state = {}, action) => {
    switch (action.type) {
        case CAST_VOTE:
            return Object.assign({}, state, {[action.player]: action.value} )
        default:
            return state
    }
}

export const castVote = (player, value) => ({
    type: CAST_VOTE,
    player,
    value
})

