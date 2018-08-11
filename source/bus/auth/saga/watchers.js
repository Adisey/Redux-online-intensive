// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { signup, login, authenticate, initialize, logout } from './workers';

function* watchSignup () {
    yield takeEvery(type.SIGNUP_ASYNC, signup);
}

function* watchLogin () {
    yield takeEvery(type.LOGIN_ASYNC, login);
}

function* watchLogout () {
    yield takeEvery(type.LOGOUT_ASYNC, logout);
}

function* watchAuthenticate () {
    yield takeEvery(type.AUTHENTICATE_ASYNC, authenticate);
}
function* watchInitialize () {
    yield takeEvery(type.INITIALIZE_ASYNC, initialize);
}

export function* watchAuth () {
    yield all([call(watchLogin), call(watchLogout), call(watchSignup), call(watchAuthenticate), call(watchInitialize)]);
}
