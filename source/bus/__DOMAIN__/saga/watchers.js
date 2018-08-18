
// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { worker } from './workers';

function* watchWorker () {
    yield takeEvery(type.TYPE, worker);
}

export function* watchDomain () {
    yield all([call(watchWorker)]);
}
