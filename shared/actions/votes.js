export const CAST_VOTE = 'planning-poker/votes/cast'
export const RECEIVE_VOTE = 'planning-poker/votes/receive'

export const castVote = (value) => (dispatch, getState) => {
    dispatch({
        type: CAST_VOTE,
        player: getState().user.name,
        value
    })
}

export const receiveVote = player => ({
    type: RECEIVE_VOTE,
    player
})
