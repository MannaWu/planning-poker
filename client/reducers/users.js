import { CHANGE_USER_NAME, REQUEST_JOIN } from '../../shared/actions/users'

export default (state = { name: '', loggedIn: false }, action) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return { name: action.name, loggedIn: state.loggedIn };
        case REQUEST_JOIN:
            return { name: state.name, loggedIn: true }
        default:
            return state
    }
}