import { ACCEPT_JOIN, REQUEST_JOIN } from '../../shared/actions/users'

export default (state = new Map(), action) => {
    switch (action.type) {
        case REQUEST_JOIN:
            return new Map().set(action.name, action.name)
        case ACCEPT_JOIN:
            return new Map(action.users)
        default:
            return state
    }
}