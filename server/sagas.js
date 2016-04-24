//import { takeEvery, delay } from 'redux-saga'
import { take, put } from 'redux-saga/effects'
import { REQUEST_JOIN } from '../shared/actions/users'
import { acceptJoin } from './reducers/users'


export function* whenUserJoins(getUsers) {
    while(true) {
        const action = yield take(REQUEST_JOIN)
        console.log(action)
        yield put(acceptJoin(action.name, getUsers()))
    }
}


export default function* rootSaga(getState) {
  yield [
    whenUserJoins(() => getState().users)
  ]
}