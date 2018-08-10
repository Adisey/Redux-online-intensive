// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { signup } from './workers';

function* watchSignup () {
    yield takeEvery(type.SIGNUP_ASYNC, signup);
}

export function* watchAuth () {
    yield all([call(watchSignup)]);
}

function* watchLogin () {
    yield takeEvery(type.LOGIN_ASYNC, login);
}

export function* watchAuthL () {
    yield all([call(watchLogin)]);
}
