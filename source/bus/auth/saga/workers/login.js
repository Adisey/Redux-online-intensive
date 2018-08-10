// Core
import { put, apply } from 'redux-saga/effects';

import { api } from "../../../../REST/index";
import { authAction } from '../../../auth/actions';
import { uiActions } from '../../../ui/actions';
import { profileActions } from "../../../profile/actions";

export function* login ({ payload: userInfo }) {
    try {
        yield put(uiActions.startFetching());
        console.log(`Login userInfo ------->`, userInfo);

        const response = yield apply(api, api.user.login, [userInfo]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        console.log(`Login profile ->`, profile);
        yield put(profileActions.fillProfile(profile));
        yield put(authAction.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, 'Login worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}