export const OPEN = 'planning-poker/connections/open'

export default (state = new Set(), action) => {
    switch (action.type) {
        case OPEN:
            return new Set(state).ad(action.connection)
        default:
            return state
    }
}

export const open = connection => ({
    type: OPEN,
    connection
})
