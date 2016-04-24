//import { takeEvery, delay } from 'redux-saga'
import { take, put } from 'redux-saga/effects'
import { REQUEST_JOIN, acceptJoin } from '../shared/actions/users'
import { CAST_VOTE, receiveVote } from '../shared/actions/votes'


export function* whenUserJoins(getUsers) {
    while(true) {
        const action = yield take(REQUEST_JOIN)
        yield put(acceptJoin(action.name, getUsers()))
    }
}

export function* whenVoteIsCast() {
    while(true) {
        const action = yield take(CAST_VOTE)
        yield put(receiveVote(action.player))
    }
}


export default function* rootSaga(getState) {
  yield [
    whenUserJoins(() => getState().users),
    whenVoteIsCast()
  ]
}