import { CAST_VOTE, RECEIVE_VOTE } from '../../shared/actions/votes'

export default (state = new Map(), action) => {
    switch (action.type) {
        case CAST_VOTE:
            return new Map(state).set(action.player, action.value)
        case RECEIVE_VOTE:
            return state.has(action.player) ? state : new Map(state).set(action.player, '');
        default:
            return state
    }
}
