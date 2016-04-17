export const CHANGE_USER_NAME = 'planning-poker/user/change-name'
export const LOGIN = 'planning-poker/user/login'

export default (state = { name: '', loggedIn: false }, action) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return { name: action.name, loggedIn: state.loggedIn };
        case LOGIN:
            return { name: state.name, loggedIn: true }
        default:
            return state
    }
}

export const changeUserName = name => ({
    type: CHANGE_USER_NAME,
    name
})

export const login = name => ({
    type: LOGIN
})
