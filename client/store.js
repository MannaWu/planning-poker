import { createStore } from '../shared/store'
import { default as votes } from './reducers/votes'
import { default as user } from './reducers/user'
import { default as users } from './reducers/users'
import { REQUEST_JOIN } from '../shared/actions/users'
import { CAST_VOTE } from '../shared/actions/votes'

export const createFrontEndStore = webSocket => createStore(
    {user, users, votes},
    null,
    [ REQUEST_JOIN, CAST_VOTE ],
    webSocket
)
