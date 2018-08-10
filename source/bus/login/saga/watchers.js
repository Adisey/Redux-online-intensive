// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { login } from './workers';

function* watchLogin () {
    yield takeEvery(type.LOGIN_ASYNC, login);
}

export function* watchAuthL () {
    yield all([call(watchLogin)]);
}
