
// Core
import { put, apply } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { api } from "../../../../REST";
import { authAction } from '../../../auth/actions';
import { uiActions } from '../../../ui/actions';

export function* signup ({ payload: userInfo }) {
    try {
        yield put(uiActions.startFetching());
        console.log(`userInfo ------->`, userInfo);

        const response = yield apply(api, api.auth.signup, [userInfo]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        console.log(`profile ->`, profile);

        yield put(authAction.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, 'signup worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
