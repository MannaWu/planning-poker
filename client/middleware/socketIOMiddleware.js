export const createSocketIOMiddleware = (socket, actionTypes = []) => store => next => action => {
    if (actionTypes.indexOf(action.type) >= 0) {
        socket.emit('action', action)
    }
    return next(action)
}

