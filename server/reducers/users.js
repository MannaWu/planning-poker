import { REQUEST_JOIN } from '../../shared/actions/users'

export default (state = {}, action) => {
    switch (action.type) {
        case REQUEST_JOIN:
            // TODO: for the key, use id instead of name
            return { ...state, [action.name]: action.name }
        default:
            return state
    }
}

export const join = user => ({
    type: JOIN,
    user
})
