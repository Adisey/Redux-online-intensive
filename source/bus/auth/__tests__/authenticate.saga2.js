/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.09.2018
 * Time: 21:02
 */
// Core
import { put, apply } from "redux-saga/effects";
import { actions } from "react-redux-form";
import { expectSaga } from 'redux-saga-test-plan';

import { api } from "../../../REST";
import { authAction } from "../../auth/actions";
import { uiActions } from "../../ui/actions";
import { profileActions } from '../../profile/actions';
import { authenticate } from "../saga/workers";

describe(`Authenticate Saga (redux-saga-test-plan)`, () => {
    test(`Проверка сценария с ответом сервера статусом 200`, async () => {
        await expectSaga(authenticate)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.authenticate), __.fetchResponseSuccess]])
            .apply(localStorage, localStorage.setItem, ['token', __.token])
            .put(actions.change('forms.user.profile.firstName', __.userProfile.firstName))
            .put(actions.change('forms.user.profile.lastName', __.userProfile.lastName))
            .put(profileActions.fillProfile(__.userProfile))
            .put(authAction.authenticate())
            .put(uiActions.stopFetching())
            .put(authAction.initialialze())
            .run();
    });
    test(`Проверка сценария с ответом сервера статусом 401`, async () => {
        await expectSaga(authenticate)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.authenticate), __.fetchResponseFail401]])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .returns(null)
            .put(uiActions.stopFetching())
            .put(authAction.initialialze())
            .run();
    });
});
