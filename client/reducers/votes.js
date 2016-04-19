import { CAST_VOTE } from '../../shared/actions/votes'

export default (state = {}, action) => {
    switch (action.type) {
        case CAST_VOTE:
            return { ...state, [action.player]: action.value }
        default:
            return state
    }
}
