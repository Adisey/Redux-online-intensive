// Core
import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST/index';
import { authAction } from "../../actions";

export function* initialize () {
    const token = yield apply(localStorage, localStorage.getItem, ['token']);

    if (token) {
        yield put(authAction.authenticateAsync());
    } else {
        yield put(authAction.initialialze());
    }
}
