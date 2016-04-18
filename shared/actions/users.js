export const CHANGE_USER_NAME = 'planning-poker/users/change-name'
export const REQUEST_JOIN = 'planning-poker/users/request-join'
export const ACCEPT_JOIN = 'planning-poker/users/accept-join'

export const changeUserName = name => ({
    type: CHANGE_USER_NAME,
    name
})

export const requestJoin = () => (dispatch, getState) => {
    dispatch({
        type: REQUEST_JOIN,
        name: getState().users.name
    })
}

