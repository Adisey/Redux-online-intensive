
// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { fetchUsers } from './workers';

function* watchFetchUsersWorker () {
    yield takeEvery(type.FETCH_USERS_ASYNC, fetchUsers);
}

export function* watchUsers () {
    yield all([call(watchFetchUsersWorker)]);
}
