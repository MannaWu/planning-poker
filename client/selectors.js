export const selectVotes = state =>
    Object.keys(state.votes).map(
        key => ({name: key, value: state.votes[key]})
    )
    