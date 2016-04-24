import { REQUEST_JOIN } from '../../shared/actions/users'

export default (state = new Map(), action) => {
    switch (action.type) {
        case REQUEST_JOIN:
            // TODO: for the key, use id instead of name
            return new Map(state).set(action.name, action.name)
        default:
            return state
    }
}