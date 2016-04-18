export const CAST_VOTE = 'planning-poker/votes/cast'

export const castVote = (value) => (dispatch, getState) => {
    dispatch({
        type: CAST_VOTE,
        player: getState().users.name,
        value
    })
}

