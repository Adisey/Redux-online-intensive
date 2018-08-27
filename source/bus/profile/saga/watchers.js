// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { updateName, updateAvatar } from './workers';

function* watchUpdateName () {
    yield takeEvery(type.UPDATE_NAME_ASYNC, updateName);
}
function* watchUpdateAvatar () {
    yield takeEvery(type.UPDATE_AVATAR_ASYNC, updateAvatar);
}

export function* watchProfile () {
    yield all([call(watchUpdateName), call(watchUpdateAvatar)]);
}
