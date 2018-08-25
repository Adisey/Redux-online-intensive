// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { updateName } from './workers';

function* watchUpdateName () {
    yield takeEvery(type.UPDATE_NAME_ASYNC, updateName);
}

export function* watchProfile () {
    yield all([call(watchUpdateName)]);
}
