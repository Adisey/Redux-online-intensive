// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { signup, login, authenticate } from './workers';

function* watchSignup () {
    yield takeEvery(type.SIGNUP_ASYNC, signup);
}

function* watchLogin () {
    yield takeEvery(type.LOGIN_ASYNC, login);
}

function* watchAuthenticate () {
    yield takeEvery(type.AUTHENTICATE_ASYNC, authenticate);
}

export function* watchAuth () {
    yield all([call(watchLogin), call(watchSignup), call(watchAuthenticate)]);
}
