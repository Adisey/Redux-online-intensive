// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { signup, login } from './workers';

function* watchSignup () {
    yield takeEvery(type.SIGNUP_ASYNC, signup);
}
function* watchLogin () {
    yield takeEvery(type.LOGIN_ASYNC, login);
}

export function* watchAuth () {
    // yield all([call(watchSignup)]);
    yield all([call(watchLogin), call(watchSignup)]);
}
